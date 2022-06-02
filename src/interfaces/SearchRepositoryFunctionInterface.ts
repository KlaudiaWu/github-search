import { ApolloQueryResult } from "@apollo/client";

import { SearchQueryVariables } from "./SearchQueryVariables";

export interface SearchRepositoryFunctionInterface<T> {
    (queryVariables?: SearchQueryVariables): Promise<ApolloQueryResult<T>>;
}