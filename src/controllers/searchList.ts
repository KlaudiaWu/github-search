import { ApolloQueryResult } from "@apollo/client";
import { BehaviorSubject } from "rxjs";

import { SearchType } from "../graphql/generated/graphql";

import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchQueryVariables } from "../interfaces/SearchQueryVariables";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { ListCounters } from "../state/searchLists";

// Here, I manage the stream with data for list, and query for data.
export function getSearchListData<T extends SearchCollection, K extends Entity>(
    repository: SearchRepositoryFunctionInterface<T>,
    type: SearchType,
    entities$: BehaviorSubject<Array<K>>,
    query$: BehaviorSubject<SearchQueryVariables>,
    listCounter$: BehaviorSubject<ListCounters>
): void {
    const query: SearchQueryVariables = query$.getValue();

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
    // Sort is hardcoded, but I think that with dynamic lists have to be one of query object variables
    queryVariables$.next({...queryVariables, query: `${searchInput} sort:id-asc`})
}
