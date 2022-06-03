import { ApolloQueryResult } from "@apollo/client";
import { BehaviorSubject } from "rxjs";

import { RepositoriesSearchQuery, UsersSearchQuery } from "../graphql/generated/graphql";
import { Entity } from "../interfaces/Entity";
import { SearchCollection } from "../interfaces/SearchCollection";
import { SearchQueryVariables } from "../interfaces/SearchQueryVariables";
import { SearchRepositoryFunctionInterface } from "../interfaces/SearchRepositoryFunctionInterface";
import { SearchListStateInterface } from "../state/searchList";

export function getSearchListData<T extends SearchCollection, K extends Entity>(repository: SearchRepositoryFunctionInterface<T>, entities$: BehaviorSubject<Array<K>>, query$: BehaviorSubject<SearchQueryVariables>): void {
    const query: SearchQueryVariables = query$.getValue();
    const data: Promise<ApolloQueryResult<T>> = repository(query);

    data.then((value: ApolloQueryResult<T>) => {
        if(value.data.search.nodes){
            // @ts-ignore
        entities$.next(value.data.search.nodes);
        query$.next({...query})}
    })
}