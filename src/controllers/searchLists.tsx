import { BehaviorSubject } from "rxjs";

import { ListCounters } from "../state/searchLists";

export function mergeListsCounters(
    listCounter$: BehaviorSubject<ListCounters>,
    listsCounters$: BehaviorSubject<ListCounters>
): void {
    const listCounterPrevValue = listCounter$.getValue();
    const listsCounters = listsCounters$.getValue();
    console.log(listCounterPrevValue, listsCounters)
    listsCounters$.next({ ...listCounterPrevValue, ...listsCounters});
}

export function changeTotalCounter(listsCounters$: BehaviorSubject<ListCounters>, resultsTotalCount$: BehaviorSubject<number>): void {
    const listsCounters = listsCounters$.getValue();
    let totalCount: number = 0;
    Object.values(listsCounters).forEach((count: number) => totalCount = totalCount + count)
    resultsTotalCount$.next(totalCount)
}
