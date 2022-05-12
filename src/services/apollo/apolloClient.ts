import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GITHUB_API_URL } from "../../config/apollo";
import { GITHUB_PERSONAL_ACCESS_TOKEN } from "../../config/constants";

const httpLink = new HttpLink({
    uri: GITHUB_API_URL,
    headers: {
        authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
