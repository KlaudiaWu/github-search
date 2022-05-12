import { ApolloProvider } from "@apollo/client";
import React from "react";

import { apolloClient } from "../services/apollo/apolloClient";

export function AppWrapper(): React.ReactElement {
    return <ApolloProvider client={apolloClient}>{/* <App /> */}</ApolloProvider>;
}
