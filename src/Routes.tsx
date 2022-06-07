import { Routes as ReactRoutes, Route } from "react-router";

import { UserAndRepositorySearchLists } from "./components/UserAndRepositorySearchLists/UserAndRepositorySearchLists";
import { UserInfo } from "./components/UserInfo/UserInfo";

export function Routes(): React.ReactElement {
    return (
        <ReactRoutes>
            <Route path="/" element={ <UserAndRepositorySearchLists /> } />
            <Route path="/user/:id" element={ <UserInfo /> } />
        </ReactRoutes>
    )
}