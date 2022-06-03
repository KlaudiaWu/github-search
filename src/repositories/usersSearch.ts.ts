import { ApolloQueryResult } from "@apollo/client";

import { UsersSearchDocument, UsersSearchQuery, UsersSearchQueryVariables } from "../graphql/generated/graphql";
import { apolloClient } from "../services/apollo/apolloClient";

export async function getUsersSearch(
    queryVariables?: UsersSearchQueryVariables
): Promise<ApolloQueryResult<UsersSearchQuery>> {
    const result = await apolloClient.query<UsersSearchQuery>({
        query: UsersSearchDocument,
        variables: { ...queryVariables },
    });

    return result;
}
