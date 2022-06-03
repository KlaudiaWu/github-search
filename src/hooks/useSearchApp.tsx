import { ChangeEvent, useEffect, useState } from "react";
import { changeSearchQuery } from "../controllers/searchApp";
import { getSearchAppInitialState, SearchAppStateInterface } from "../state/searchApp";

interface useSearchAppPropsInterface {}

export function useSearchApp({}: useSearchAppPropsInterface) {
    const [searchAppState] = useState<SearchAppStateInterface>(getSearchAppInitialState());
    const { searchInput$ } = searchAppState;

    function searchChange(event: ChangeEvent<HTMLInputElement>) {
        changeSearchQuery(searchInput$, event.target.value)
    }

    return {
        searchChange,
        searchAppState,
    };
}
