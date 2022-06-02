import { useEffect, useState } from "react";
import { getSearchListsInitialState, SearchListsStateInterface } from "../state/searchLists";

interface useSearchListsPropsInterface {
}

export function useSearchLists({}: useSearchListsPropsInterface) {
    const [ searchListsState ] = useState<SearchListsStateInterface>(getSearchListsInitialState());

    
    useEffect(() => {

        return () => {
        };
    });

    return {
        searchListsState
    }
}