import { SearchListsContext, SearchListsStateInterface } from "../state/searchLists";

export interface SearchListProviderProps {
    children?: React.ReactNode;
    searchListsState: SearchListsStateInterface;
}

export function SearchListsProvider({children, searchListsState}: SearchListProviderProps) {

    return (
        <SearchListsContext.Provider
            value={ searchListsState }
        >
            { children }
        </SearchListsContext.Provider>
    );
}
