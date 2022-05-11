import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const GITHUB_API_URL = "https://api.github.com/graphql";

const httpLink = new HttpLink({
    uri: GITHUB_API_URL,
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
