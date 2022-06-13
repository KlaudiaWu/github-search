import React from "react";
import { BehaviorSubject } from "rxjs";

import { SearchType } from "../graphql/generated/graphql";

import { SEARCH_RESULTS_PER_PAGE } from "../config/constants";
import { Entity } from "../interfaces/Entity";
import { SearchQueryVariables } from "../interfaces/SearchQueryVariables";

export function getDefaultQueryVariables(type?: SearchType): SearchQueryVariables {
    return {
        numOfResults: SEARCH_RESULTS_PER_PAGE / 2,
        type: type ?? SearchType.User,
        query: "",
    };
}

export interface SearchListStateInterface<T> {
    entities$: BehaviorSubject<T[]>;
    queryVariables$: BehaviorSubject<SearchQueryVariables>;
}

interface CreateSearchListContextInterface {
    initialQueryVariables?: SearchQueryVariables;
    type?: SearchType;
}

export function getSearchListInitialState<T>({initialQueryVariables, type}: CreateSearchListContextInterface): SearchListStateInterface<T> {
    return {
        entities$: new BehaviorSubject<Array<T>>([]),
        queryVariables$: new BehaviorSubject<SearchQueryVariables>(initialQueryVariables || getDefaultQueryVariables(type)),
    };
}

export const SearchListContext: React.Context<SearchListStateInterface<Entity>> = React.createContext(
    getSearchListInitialState<Entity>({})
);
