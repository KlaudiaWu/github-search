import { useContext, useEffect, useState } from "react";
import { changeSearchValueQueryVariable, getSearchListData } from "../controllers/searchList";
import { SearchType } from "../graphql/generated/graphql";

import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchQueryVariables } from "../interfaces/SearchQueryVariables";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { SearchAppContext } from "../state/searchApp";
import { getDefaultQueryVariables, getSearchListInitialState, SearchListStateInterface } from "../state/searchList";
import { SearchListsContext } from "../state/searchLists";
import { useObservable } from "./useObservable";

interface useSearchListPropsInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
}

export function useSearchList<T extends SearchCollection, K extends Entity>({
    type,
    repository,
}: useSearchListPropsInterface<T>) {
    const [searchListState] = useState<SearchListStateInterface<K>>(
        getSearchListInitialState<K>({ initialQueryVariables: getDefaultQueryVariables(type), type })
    );
    const { listCounter$ } = useContext(SearchListsContext);
    const { queryVariables$, entities$ } = searchListState;
    const queryVariables: SearchQueryVariables = useObservable(queryVariables$);


    const { searchInput$ } = useContext(SearchAppContext);
    const searchInput: string = useObservable(searchInput$);

    useEffect(() => {
        getSearchListData(repository, type, entities$, queryVariables$, listCounter$);
    }, [queryVariables, entities$, listCounter$, queryVariables$, repository, type]);

    useEffect(() => {
        changeSearchValueQueryVariable(searchInput$, queryVariables$);

        return () => {
        
        };
    }, [searchInput]);

    return {
        searchListState,
    };
}
