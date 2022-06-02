import React from "react";
import { BehaviorSubject } from "rxjs";

export interface SearchListsStateInterface {
    resultsTotalCount$: BehaviorSubject<number>;
    listsCounters$: BehaviorSubject<ListCounters[]>;
}

export interface ListCounters {
    [listName: string]: number;
}

export function getSearchListsInitialState(): SearchListsStateInterface {
    return {
        resultsTotalCount$: new BehaviorSubject<number>(0),
        listsCounters$: new BehaviorSubject<ListCounters[]>([])
    };
}

export const SearchListsContext: React.Context<SearchListsStateInterface> = React.createContext(
    getSearchListsInitialState()
);