import { Box } from "@mui/material";
import { ReactNode, useContext } from "react";

import { SearchType } from "../../graphql/generated/graphql";

import { getRepositoriesSearch } from "../../repositories/repositoriesSearch";
import { getUsersSearch } from "../../repositories/usersSearch.ts";
import { SearchAppContext } from "../../state/searchApp";
import { RepositoryListItem } from "../RepositoryListItem/RepositoryListItem";
import { SearchList } from "../SearchList/SearchList";
import { UserListItem } from "../UserListItem/UserListItem";

export function UserAndRepositorySearchLists(): ReactNode {
    const { resultsTotalCount$ } = useContext(SearchAppContext);

    return (
        <Box>
            <SearchList repository={getRepositoriesSearch} type={SearchType.Repository} />
            <SearchList repository={getUsersSearch} type={SearchType.User} />
        </Box>
    );
}
