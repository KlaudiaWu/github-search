import { ReactNode } from "react";

import { SearchType } from "../../graphql/generated/graphql";
import { SearchCollection } from "../../interfaces/SearchCollection";
import { getRepositoriesSearch } from "../../repositories/repositoriesSearch";
import { getUsersSearch } from "../../repositories/usersSearch.ts";
import { SearchList } from "../SearchList/SearchList";

export function UserAndRepositorySearchLists(): ReactNode {
    return (
        <div>
            <SearchList repository={getRepositoriesSearch} type={SearchType.Repository}></SearchList>
            <SearchList repository={getUsersSearch} type={SearchType.User}></SearchList>
        </div>
    );
}
