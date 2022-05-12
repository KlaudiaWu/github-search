import List from '@mui/material/List';

import { Entity } from "../../interfaces/Entity";
import { SearchRepositoryFunctionInterface } from "../../interfaces/SearchRepositoryFunctionInterface";

export interface ListInterface<T extends Entity> {
    repository: SearchRepositoryFunctionInterface<T>;
}

export function SearchList<T extends Entity>({repository}: ListInterface<T>): React.ReactElement{
    return <List></List>

}