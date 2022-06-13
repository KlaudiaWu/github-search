import React from "react";
import { useContext } from "react";

import { useObservable } from "../../../hooks/useObservable";
import { Entity } from "../../../interfaces/Entity";
import { SearchListContext } from "../../../state/searchList";

import { ListItemsWrapperStyles } from "./searchLListItems.styles";

export interface SearchListItemsInterface {
    listElementTemplate: JSX.Element;
}

export function SearchListItems({ listElementTemplate }: SearchListItemsInterface): React.ReactElement {
    const { entities$ } = useContext(SearchListContext);
    const entities: Entity[] = useObservable(entities$);

    return (
        <ListItemsWrapperStyles>
            {entities.map((entity: Entity) => (
                // All of list items has to have "entity" prop to receive data
                <listElementTemplate.type entity={entity} key={entity.id} />
            ))}
        </ListItemsWrapperStyles>
    );
}
