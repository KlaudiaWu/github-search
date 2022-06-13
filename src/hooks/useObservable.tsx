import { useState, useEffect } from "react";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

// This hook helps us to subscribe stream in component that needs data.
// On every data change, this code trigger change in component.
export function useObservable(observable: Observable<any>) {
    const [ value, setValue ] = useState<any>(observable instanceof BehaviorSubject ? observable.getValue() : undefined);

    useEffect(() => {
        const subscription: Subscription = observable.subscribe({ next: setValue });
        return () => subscription.unsubscribe();
    }, [ observable ]);

    return value;
};