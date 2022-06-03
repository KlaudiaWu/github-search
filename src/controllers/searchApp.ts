import { BehaviorSubject } from "rxjs";

export function changeSearchQuery(searchInput$: BehaviorSubject<string>, value: string): void {
    searchInput$.next(value);
}