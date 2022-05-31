import { ApolloProvider } from "@apollo/client";
import React from "react";

import { apolloClient } from "../services/apollo/apolloClient";
import { SearchApp } from "./SearchApp";

export function App(): React.ReactElement {
    return <ApolloProvider client={apolloClient}>{<SearchApp />}</ApolloProvider>;
}
