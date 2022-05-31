import { Entity } from "../interfaces/Entity";
import { SearchListContext, SearchListStateInterface } from "../state/searchList";

export interface ListProviderProps {
    children?: React.ReactNode;
    searchListState: SearchListStateInterface<Entity>;
}

export function SearchListProvider({children, searchListState}: ListProviderProps) {

    return (
        <SearchListContext.Provider
            value={ searchListState }
        >
            { children }
        </SearchListContext.Provider>
    );
}
