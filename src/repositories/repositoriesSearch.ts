import { ApolloQueryResult } from "@apollo/client";

import {
    RepositoriesSearchDocument,
    RepositoriesSearchQuery,
    RepositoriesSearchQueryVariables
} from "../graphql/generated/graphql";
import { apolloClient } from "../services/apollo/apolloClient";

export async function getRepositoriesSearch(
    queryVariables?: RepositoriesSearchQueryVariables
): Promise<ApolloQueryResult<RepositoriesSearchQuery>> {
    const result = await apolloClient.query<RepositoriesSearchQuery>({
        query: RepositoriesSearchDocument,
        variables: { ...queryVariables },
    });

    return result;
}
