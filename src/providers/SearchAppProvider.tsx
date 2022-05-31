import { SearchAppContext, SearchAppStateInterface } from "../state/searchApp";

export interface SearchAppProviderProps {
    children?: React.ReactNode;
    searchAppState: SearchAppStateInterface;
}

export function SearchAppProvider({children, searchAppState}: SearchAppProviderProps) {
    return (
        <SearchAppContext.Provider
            value={ searchAppState }
        >
            { children }
        </SearchAppContext.Provider>
    );
}
