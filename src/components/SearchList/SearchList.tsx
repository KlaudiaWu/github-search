import List from "@mui/material/List";

import { SearchType } from "../../graphql/generated/graphql";
import { useObservable } from "../../hooks/useObservable";
import { useSearchList } from "../../hooks/useSearchList";
import { SearchCollection } from "../../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../../interfaces/SearchRepositoryFunctionInterface";

export interface ListInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
}

export function SearchList<T extends SearchCollection>({ repository, type }: ListInterface<T>): React.ReactElement {
    const { searchListState } = useSearchList({ repository, type });
    const entities = useObservable(searchListState.entities$);

    return <List></List>;
}
