import React from "react";
import { ApolloProvider } from "react-apollo";

import { apolloClient } from "../services/apollo/apolloClient";

export function AppWrapper(): React.ReactElement {
    return <ApolloProvider client={apolloClient}>{/* <App /> */}</ApolloProvider>;
}
