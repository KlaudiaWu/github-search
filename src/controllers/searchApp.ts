import AwesomeDebouncePromise from "awesome-debounce-promise";
import { BehaviorSubject } from "rxjs";

export function changeSearchQuery(searchInput$: BehaviorSubject<string>, value: string): void {
    searchInput$.next(value);
};

function saveFieldValue(searchInput$: BehaviorSubject<string>, value: string) {
    changeSearchQuery(searchInput$, value)
}

// For debouncing input
export const searchChangeDebounced = AwesomeDebouncePromise(saveFieldValue, 500, {key: (searchInput$: BehaviorSubject<string>, value: string) => null})

