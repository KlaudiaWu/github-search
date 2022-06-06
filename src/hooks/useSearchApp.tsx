import AwesomeDebouncePromise from "awesome-debounce-promise";
import { ChangeEvent, useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { changeSearchQuery } from "../controllers/searchApp";
import { getSearchAppInitialState, SearchAppStateInterface } from "../state/searchApp";

interface useSearchAppPropsInterface {}

export function useSearchApp({}: useSearchAppPropsInterface) {
    const [searchAppState] = useState<SearchAppStateInterface>(getSearchAppInitialState());
    const { searchInput$ } = searchAppState;

    async function searchChange(event: ChangeEvent<HTMLInputElement>) {
        await searchChangeDebounced(searchInput$, event.target.value )
    }

    const searchChangeDebounced = AwesomeDebouncePromise(saveFieldValue, 500, {key: (searchInput$: BehaviorSubject<string>, value: string) => null})

    function saveFieldValue(searchInput$: BehaviorSubject<string>, value: string) {
        changeSearchQuery(searchInput$, value)
    }

    return {
        searchChange,
        searchAppState,
    };
}
