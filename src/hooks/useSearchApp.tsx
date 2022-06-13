import { ChangeEvent, useState } from "react";
import { searchChangeDebounced } from "../controllers/searchApp";
import { getSearchAppInitialState, SearchAppStateInterface } from "../state/searchApp";

export function useSearchApp() {
    const [searchAppState] = useState<SearchAppStateInterface>(getSearchAppInitialState());
    const { searchInput$ } = searchAppState;

    async function searchChange(event: ChangeEvent<HTMLInputElement>) {
        await searchChangeDebounced(searchInput$, event.target.value )
    }

    return {
        searchChange,
        searchAppState,
    };
}
