import { ApolloQueryResult } from "@apollo/client";

import { SearchCollection } from "./SearchCollection";
import { SearchQueryVariables } from "./SearchQueryVariables";

export interface SearchRepositoryFunctionInterface<T extends SearchCollection> {
    (queryVariables?: SearchQueryVariables): Promise<ApolloQueryResult<T>>;
}