import { ApolloQueryResult } from "@apollo/client";
import { BehaviorSubject, mergeMap } from "rxjs";

import { RepositoriesSearchQuery, SearchType, UsersSearchQuery } from "../graphql/generated/graphql";
import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchQueryVariables } from "../interfaces/SearchQueryVariables";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { SearchListStateInterface } from "../state/searchList";
import { ListCounters } from "../state/searchLists";

export function getSearchListData<T extends SearchCollection, K extends Entity>(
    repository: SearchRepositoryFunctionInterface<T>,
    type: SearchType,
    entities$: BehaviorSubject<Array<K>>,
    query$: BehaviorSubject<SearchQueryVariables>,
    listCounter$: BehaviorSubject<ListCounters>
): void {
    const query: SearchQueryVariables = query$.getValue();
    const listCounter: ListCounters = listCounter$.getValue();

    const data: Promise<ApolloQueryResult<T>> = repository(query);

    data.then((value: ApolloQueryResult<T>) => {
        if (value.data.search.nodes) {
            // @ts-ignore
            entities$.next(value.data.search.nodes);
            listCounter$.next({[`${type}`]: value.data.search.totalCount});
        }
    });
}

export function changeSearchValueQueryVariable(searchInput$: BehaviorSubject<string>, queryVariables$: BehaviorSubject<SearchQueryVariables>) {
    const searchInput = searchInput$.getValue();
    const queryVariables = queryVariables$.getValue()
    queryVariables$.next({...queryVariables, query: searchInput})
}
