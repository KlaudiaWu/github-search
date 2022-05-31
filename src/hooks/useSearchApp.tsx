import { useEffect, useState } from "react";
import { getSearchAppInitialState, SearchAppStateInterface } from "../state/searchApp";

interface useSearchAppPropsInterface {
    repositoriesSearchTotalCount?: number;
    usersSearchTotalCount?: number;
}

export function useSearchApp({repositoriesSearchTotalCount, usersSearchTotalCount}: useSearchAppPropsInterface) {
    const [ searchAppState ] = useState<SearchAppStateInterface>(getSearchAppInitialState());
    
    useEffect(() => {
        

        return () => {
        };
    },[repositoriesSearchTotalCount, usersSearchTotalCount]);

    return {
        searchAppState,
    }
}