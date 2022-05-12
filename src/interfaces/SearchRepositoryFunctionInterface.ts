import { ApolloQueryResult, ObservableQuery } from "@apollo/client";

import { Entity } from "./Entity";
import { SearchQueryVariables } from "./SearchQueryVariables";

export interface SearchRepositoryFunctionInterface<T extends Entity> {
    (queryVariables?: SearchQueryVariables): ApolloQueryResult<T>;
}