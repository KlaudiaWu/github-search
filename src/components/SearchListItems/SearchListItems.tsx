import List from "@mui/material/List";
import React from "react";
import { useContext } from "react";

import { useObservable } from "../../hooks/useObservable";
import { Entity } from "../../interfaces/Entity";
import { SearchListContext } from "../../state/searchList";

export interface SearchListItemsInterface {
    listElementTemplate: JSX.Element;
}

export function SearchListItems({ listElementTemplate }: SearchListItemsInterface): React.ReactElement {
    const { entities$ } = useContext(SearchListContext);
    const entities: Entity[] = useObservable(entities$);

    return (
        <List>
            {entities.map((entity: Entity) => (
                // All of list items has to have "entity" prop to receive data
                <listElementTemplate.type entity={entity} key={entity.id} />
            ))}
        </List>
    );
}
