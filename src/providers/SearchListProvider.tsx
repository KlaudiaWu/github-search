import { Entity } from "../interfaces/Entity";
import { SearchListContext, SearchListStateInterface } from "../state/searchList";

export interface SearchListProviderProps {
    children?: React.ReactNode;
    searchListState: SearchListStateInterface<Entity>;
}

export function SearchListProvider({children, searchListState}: SearchListProviderProps) {

    return (
        <SearchListContext.Provider
            value={ searchListState }
        >
            { children }
        </SearchListContext.Provider>
    );
}
