import React from "react";
import { BehaviorSubject } from "rxjs";

export interface SearchListsStateInterface {
    resultsTotalCount$: BehaviorSubject<number>;
    listCounter$: BehaviorSubject<ListCounters>; // Stream for single list counter
    listsCounters$: BehaviorSubject<ListCounters>; // Stream for multiple lists counters from all subject info
}

export interface ListCounters {
    [listName: string]: number;
}

export function getSearchListsInitialState(): SearchListsStateInterface {
    return {
        resultsTotalCount$: new BehaviorSubject<number>(0),
        listCounter$: new BehaviorSubject<ListCounters>({}),
        listsCounters$: new BehaviorSubject<ListCounters>({})
    };
}

export const SearchListsContext: React.Context<SearchListsStateInterface> = React.createContext(
    getSearchListsInitialState()
);