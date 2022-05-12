import { useState } from "react";
import { SearchType } from "../graphql/generated/graphql";

import { Entity } from "../interfaces/Entity";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { getDefaultQueryVariables, getSearchListInitialState, SearchListStateInterface } from "../state/searchList";

interface useSearchListPropsInterface<T extends Entity> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
}

export function useSearchList<T extends Entity>({type, repository}: useSearchListPropsInterface<T>) {
    const [ searchListState ] = useState<SearchListStateInterface<T>>(getSearchListInitialState<T>({ initialQueryVariables: getDefaultQueryVariables(type), type}));
    const { queryVariables$, entities$ } = searchListState;
    
}