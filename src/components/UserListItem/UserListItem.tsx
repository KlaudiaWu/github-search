import { Avatar, Box, ListItemAvatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


import { User } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";

export interface UserListItemInterface {
    // Name of entity props must be "entity", not "user", becouse of SearchListItems
    // I think, it has to by typed ad EntityListItemPropsInterface, and all of [Entity]}ListItems
    // has to have this interface as props
    entity?: User;
}

export function UserListItem({ entity }: UserListItemInterface): JSX.Element {
    const navigate = useNavigate()
    const handleUserClick = () => {
        console.log("CLICK", entity)
        if (entity) {
            // history.push(`/user/${entity.id}`);
            // return <Navigate to={`/user/${entity.id}`} />
            navigate(`/user/${entity.id}`, {state: {entity: entity}})
        }
    };

    return (
        <ListItem>
            {entity ? (
                <Box onClick={handleUserClick}>
                    <Box>
                        <ListItemAvatar>
                            <Avatar alt={`${entity.name} avatar`} src={entity.avatarUrl} />
                        </ListItemAvatar>
                    </Box>
                    <Box>
                        <Typography variant="h1">{entity.name ?? entity.login}</Typography>
                        <Typography>{entity.login}</Typography>
                        {entity.bio ? <Typography>{entity.bio}</Typography> : null}
                        {entity.location ? <Typography>{entity.location}</Typography> : null}
                    </Box>
                </Box>
            ) : null}
        </ListItem>
    );
}
