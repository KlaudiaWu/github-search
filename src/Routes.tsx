import { Routes as ReactRoutes, Route } from "react-router";

import { SearchListsPage } from "./components/SearchListsPage/SearchListsPage";
import { UserInfoPage } from "./components/UserInfoPage/UserInfoPage";

export function Routes(): React.ReactElement {
    return (
        <ReactRoutes>
            <Route path="/" element={<SearchListsPage />} />
            <Route path="/user/:id" element={<UserInfoPage />} />
        </ReactRoutes>
    );
}
