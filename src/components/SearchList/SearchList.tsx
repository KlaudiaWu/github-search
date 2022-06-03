import { useContext } from "react";

import { SearchType } from "../../graphql/generated/graphql";
import { useObservable } from "../../hooks/useObservable";
import { useSearchList } from "../../hooks/useSearchList";
import { SearchCollection } from "../../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../../interfaces/SearchRepositoryFunctionInterface";
import { SearchListProvider } from "../../providers/SearchListProvider";
import { SearchAppContext } from "../../state/searchApp";
import { ListCounters, SearchListsContext } from "../../state/searchLists";
import { SearchListItems } from "../SearchListItems/SearchListItems";

export interface ListInterface<T extends SearchCollection> {
    repository: SearchRepositoryFunctionInterface<T>;
    type: SearchType;
    listElementTemplate: JSX.Element;
}

export function SearchList<T extends SearchCollection>({
    repository,
    type,
    listElementTemplate
}: ListInterface<T>): React.ReactElement {
    const { searchInput$ } = useContext(SearchAppContext)
    const searchInput: string = useObservable(searchInput$);
    const { listsCounters$ } = useContext(SearchListsContext);
    const listsCounters: ListCounters[] = useObservable(listsCounters$);
    const { searchListState } = useSearchList({ repository, type, searchInput, listsCounters });

    return (
        <SearchListProvider searchListState={searchListState}>
            <SearchListItems listElementTemplate={listElementTemplate} />
        </SearchListProvider>
    );
}
