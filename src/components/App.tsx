import React from "react";
import { ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from "@mui/material";

import { apolloClient } from "../services/apollo/apolloClient";
import { theme as defaultTheme } from "../theme";
import { SearchApp } from "./SearchApp";

export function App(): React.ReactElement {
    const theme = createTheme({ ...defaultTheme }); 
    
    return (
        <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
                <SearchApp />
            </ThemeProvider>
        </ApolloProvider>
    );
}
