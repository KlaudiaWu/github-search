import { Box } from "@mui/material";

import { SearchType } from "../../graphql/generated/graphql";

import { getRepositoriesSearch } from "../../repositories/repositoriesSearch";
import { getUsersSearch } from "../../repositories/usersSearch.ts";
import { RepositoryListItem } from "../RepositoryListItem/RepositoryListItem";
import { SearchListsConfig, SearchLists } from "../SearchLists/SearchLists";
import { UserListItem } from "../UserListItem/UserListItem";

const listsConfig: SearchListsConfig = {
    lists: [
        { repository: getUsersSearch, type: SearchType.User, listElementTemplate: <UserListItem /> },
        { repository: getRepositoriesSearch, type: SearchType.Repository, listElementTemplate: <RepositoryListItem /> },
    ],
};

export function SearchListsPage(): JSX.Element {
    return (
        <Box>
            <SearchLists searchListsConfig={listsConfig} />
        </Box>
    );
}
