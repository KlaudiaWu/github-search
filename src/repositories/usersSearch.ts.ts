import { ApolloQueryResult } from "@apollo/client";

import { SearchRepositoriesDocument, SearchUsersQuery, SearchUsersQueryVariables } from "../graphql/generated/graphql";
import { apolloClient } from "../services/apollo/apolloClient";

export async function getRepositoriesSearch(
    queryVariables: SearchUsersQueryVariables
): Promise<ApolloQueryResult<SearchUsersQuery>> {
    const result = await apolloClient.query<SearchUsersQuery>({
        query: SearchRepositoriesDocument,
        variables: { queryVariables },
    });

    return result;
}
