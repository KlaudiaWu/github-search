import React from "react";
import { BehaviorSubject } from "rxjs";

export interface SearchAppStateInterface {
    searchInput$: BehaviorSubject<string>;
}

export function getSearchAppInitialState(): SearchAppStateInterface {
    return {
        searchInput$: new BehaviorSubject<string>(""),
    };
}

export const SearchAppContext: React.Context<SearchAppStateInterface> = React.createContext(
    getSearchAppInitialState()
);