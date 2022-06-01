import List from "@mui/material/List";
import React from "react";
import { useContext } from "react";

import { Repository, SearchType, User } from "../../graphql/generated/graphql";

import { useObservable } from "../../hooks/useObservable";
import { Entity } from "../../interfaces/Entity";
import { SearchListContext } from "../../state/searchList";
import { RepositoryListItem } from "../RepositoryListItem/RepositoryListItem";
import { UserListItem } from "../UserListItem/UserListItem";

export interface SearchListItemsInterface {}

export function SearchListItems<T>({}: SearchListItemsInterface): React.ReactElement {
    const { entities$ } = useContext(SearchListContext);
    const entities: Entity[] = useObservable(entities$);

    function getItemByEntityType(entity: Entity) {
        switch (entity.__typename) {
            case "Repository": {
                const repository = entity as Repository;
                return <RepositoryListItem repository={repository} />;
            }
            case "User": {
                const user = entity as User;
                return <UserListItem user={user} />;
            }
        }
    }

    return <List>{entities.map((entity: Entity) => getItemByEntityType(entity))}</List>;
}
