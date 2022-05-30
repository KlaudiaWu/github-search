import { ApolloQueryResult } from "@apollo/client";

import {
    Exact,
    InputMaybe,
    SearchRepositoriesDocument,
    SearchRepositoriesQuery,
    SearchRepositoriesQueryVariables,
    SearchType,
} from "../graphql/generated/graphql";
import { apolloClient } from "../services/apollo/apolloClient";

export async function getRepositoriesSearch(
    queryVariables?: SearchRepositoriesQueryVariables
): Promise<ApolloQueryResult<SearchRepositoriesQuery>> {
    const result = await apolloClient.query<SearchRepositoriesQuery>({
        query: SearchRepositoriesDocument,
        variables: { queryVariables },
    });

    return result;
}