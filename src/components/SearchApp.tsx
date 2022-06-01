import React from "react";
import { useSearchApp } from "../hooks/useSearchApp";

import { SearchAppProvider } from "../providers/SearchAppProvider";
import { Routes } from "../Routes";
import { Header } from "./Header/Header";

export function SearchApp(): React.ReactElement {
    const { searchAppState } = useSearchApp({});
    
    return (
        <SearchAppProvider searchAppState={searchAppState}>
            <Header />
            <Routes />
        </SearchAppProvider>
    );
}
