import { useEffect, useState } from "react";
import { getSearchListData } from "../controllers/searchList";
import { SearchType } from "../graphql/generated/graphql";

import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { getDefaultQueryVariables, getSearchListInitialState, SearchListStateInterface } from "../state/searchList";
import { ListCounters } from "../state/searchLists";

interface useSearchListPropsInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
    searchInput: string;
    listsCounters: ListCounters[];
}

export function useSearchList<T extends SearchCollection, K extends Entity>({type, repository, searchInput, listsCounters}: useSearchListPropsInterface<T>) {
    const [ searchListState ] = useState<SearchListStateInterface<K>>(getSearchListInitialState<K>({ initialQueryVariables: getDefaultQueryVariables(type), type}));
    const { queryVariables$, entities$ } = searchListState;
    
    useEffect(() => {
        getSearchListData(repository, entities$, queryVariables$);

        return () => {
        };
    });

    return {
        searchListState
    }
}