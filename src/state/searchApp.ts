import React from "react";
import { BehaviorSubject } from "rxjs";

export interface SearchAppStateInterface {
    resultsTotalCount$: BehaviorSubject<number>;
    searchInput$: BehaviorSubject<string>;
}

export function getSearchAppInitialState(): SearchAppStateInterface {
    return {
        resultsTotalCount$: new BehaviorSubject<number>(0),
        searchInput$: new BehaviorSubject<string>(""),
    };
}

export const SearchAppContext: React.Context<SearchAppStateInterface> = React.createContext(
    getSearchAppInitialState()
);