import { BehaviorSubject } from "rxjs";

import { ListCounters } from "../state/searchLists";

// There are many kinds of lists (each created for a different type of entity) in this app.
// That's why we neet to merge counters to have informations from all
// instances of lists.
export function mergeListsCounters(
    listCounter$: BehaviorSubject<ListCounters>,
    listsCounters$: BehaviorSubject<ListCounters>
): void {
    const listCounterValue = listCounter$.getValue();
    const listsCounters = listsCounters$.getValue();
    listsCounters$.next({ ...listsCounters, ...listCounterValue});
}

// When listsCounters changes, this code will be executed
export function changeTotalCounter(listsCounters$: BehaviorSubject<ListCounters>, resultsTotalCount$: BehaviorSubject<number>): void {
    const listsCounters = listsCounters$.getValue();
    let totalCount: number = 0;
    Object.values(listsCounters).forEach((count: number) => totalCount = totalCount + count)
    resultsTotalCount$.next(totalCount)
}