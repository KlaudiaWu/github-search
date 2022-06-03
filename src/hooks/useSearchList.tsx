import { useContext, useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { getSearchListData } from "../controllers/searchList";
import { SearchType } from "../graphql/generated/graphql";

import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { getDefaultQueryVariables, getSearchListInitialState, SearchListStateInterface } from "../state/searchList";
import { ListCounters, SearchListsContext } from "../state/searchLists";
import { useObservable } from "./useObservable";

interface useSearchListPropsInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
    searchInput: string;
}

export function useSearchList<T extends SearchCollection, K extends Entity>({type, repository, searchInput, }: useSearchListPropsInterface<T>) {
    const [ searchListState ] = useState<SearchListStateInterface<K>>(getSearchListInitialState<K>({ initialQueryVariables: getDefaultQueryVariables(type), type}));
    const { listCounter$ } = useContext(SearchListsContext);
    const { queryVariables$, entities$ } = searchListState;
    
    useEffect(() => {
        getSearchListData(repository, type, entities$, queryVariables$, listCounter$);
    }, []);

    return {
        searchListState
    }
}