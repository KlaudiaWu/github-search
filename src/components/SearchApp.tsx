import React from "react";
import { useSearchApp } from "../hooks/useSearchApp";

import { SearchAppProvider } from "../providers/SearchAppProvider";
import { Routes } from "../Routes";
import { Header } from "./Header/Header";

export function SearchApp(): React.ReactElement {
    const { searchAppState, searchChange } = useSearchApp({});
    
    return (
        <SearchAppProvider searchAppState={searchAppState}>
            <Header handleSearchChange={searchChange} />
            <Routes />
        </SearchAppProvider>
    );
}
