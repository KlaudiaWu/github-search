import List from "@mui/material/List";

import { SearchType } from "../../graphql/generated/graphql";
import { useSearchList } from "../../hooks/useSearchList";
import { SearchCollection } from "../../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../../interfaces/SearchRepositoryFunctionInterface";
import { SearchListProvider } from "../../providers/SearchListProvider";

export interface ListInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
}

export function SearchList<T extends SearchCollection>({ repository, type }: ListInterface<T>): React.ReactElement {
    const { searchListState } = useSearchList({ repository, type });

    return (
        <SearchListProvider searchListState={searchListState}>
            <List></List>
        </SearchListProvider>
    );
}
