import { SearchType } from "../../graphql/generated/graphql";

import { useSearchLists } from "../../hooks/useSearchLists";
import { SearchCollection } from "../../interfaces/SearchCollection";
import { SearchRepositoryFunctionInterface } from "../../interfaces/SearchRepositoryFunctionInterface";
import { SearchListsProvider } from "../../providers/SearchListsProvider";
import { SearchList } from "../SearchList/SearchList";
import { SearchListsResultsCounter } from "./SearchListsResultsCounter/SearchListsResultsCounter";

import { SearchListsStyles } from "./searchLists.styles";

interface SearchListConfig {
    repository: SearchRepositoryFunctionInterface<SearchCollection>;
    type: SearchType;
    listElementTemplate: JSX.Element; // Element must have "entity" prop
}

export interface SearchListsConfig {
    lists: SearchListConfig[];
}

interface SearchListsWrapperPropsInterface {
    searchListsConfig: SearchListsConfig;
}

// This is wrapper component, that agregates all lists. 
export function SearchLists({ searchListsConfig }: SearchListsWrapperPropsInterface): JSX.Element {
    const { searchListsState } = useSearchLists();

    return (
        <SearchListsStyles>
            <SearchListsProvider searchListsState={searchListsState}>
                <SearchListsResultsCounter />
                {searchListsConfig.lists.map((listConfig: SearchListConfig) => (
                    <SearchList
                        key={listConfig.type}
                        repository={listConfig.repository}
                        type={listConfig.type}
                        listElementTemplate={listConfig.listElementTemplate}
                    />
                ))}
            </SearchListsProvider>
        </SearchListsStyles>
    );
}
