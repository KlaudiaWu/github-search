import { useEffect, useState } from "react";
import { changeTotalCounter, mergeListsCounters } from "../controllers/searchLists";
import { getSearchListsInitialState, ListCounters, SearchListsStateInterface } from "../state/searchLists";
import { useObservable } from "./useObservable";

interface useSearchListsPropsInterface {
}

export function useSearchLists({}: useSearchListsPropsInterface) {
    const [ searchListsState ] = useState<SearchListsStateInterface>(getSearchListsInitialState());
    const { listCounter$, listsCounters$, resultsTotalCount$ } = searchListsState;
    const listCounter: ListCounters = useObservable(listCounter$);
    const listsCounters: ListCounters = useObservable( listsCounters$);

    useEffect(() => {
        mergeListsCounters(listCounter$, listsCounters$)
    }, [listCounter, listCounter$, listsCounters$]);

    useEffect(() => {
        changeTotalCounter(listsCounters$, resultsTotalCount$);
    }, [listsCounters, listsCounters$, resultsTotalCount$]);

    return {
        searchListsState
    }
}