import { useState, useEffect } from "react";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

export function useObservable(observable: Observable<any>) {
    const [ value, setValue ] = useState<any>(observable instanceof BehaviorSubject ? observable.getValue() : undefined);

    useEffect(() => {
        const subscription: Subscription = observable.subscribe({ next: setValue });
        return () => subscription.unsubscribe();
    }, [ observable ]);

    return value;
};