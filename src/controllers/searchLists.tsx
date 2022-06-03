import { BehaviorSubject } from "rxjs";

import { ListCounters } from "../state/searchLists";

export function mergeListsCounters(
    listCounter$: BehaviorSubject<ListCounters>,
    listsCounters$: BehaviorSubject<ListCounters>
): void {
    const listCounterValue = listCounter$.getValue();
    const listsCounters = listsCounters$.getValue();
    listsCounters$.next({ ...listsCounters, ...listCounterValue});
}

export function changeTotalCounter(listsCounters$: BehaviorSubject<ListCounters>, resultsTotalCount$: BehaviorSubject<number>): void {
    const listsCounters = listsCounters$.getValue();
    let totalCount: number = 0;
    Object.values(listsCounters).forEach((count: number) => totalCount = totalCount + count)
    resultsTotalCount$.next(totalCount)
}
