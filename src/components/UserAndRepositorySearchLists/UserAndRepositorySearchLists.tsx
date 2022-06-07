import { Box } from "@mui/material";

import { SearchType } from "../../graphql/generated/graphql";

import { getRepositoriesSearch } from "../../repositories/repositoriesSearch";
import { getUsersSearch } from "../../repositories/usersSearch.ts";
import { RepositoryListItem } from "../repository/RepositoryListItem/RepositoryListItem";
import { SearchListsConfig, SearchListsWrapper } from "../SearchListsWrapper/SearchListsWrapper";
import { UserListItem } from "../UserListItem/UserListItem";

const listsConfig: SearchListsConfig = {
    lists: [
        { repository: getUsersSearch, type: SearchType.User, listElementTemplate: <UserListItem /> },
        { repository: getRepositoriesSearch, type: SearchType.Repository, listElementTemplate: <RepositoryListItem /> },
    ],
};

export function UserAndRepositorySearchLists(): JSX.Element {
    return (
        <Box>
            <SearchListsWrapper searchListsConfig={listsConfig} />
        </Box>
    );
}
