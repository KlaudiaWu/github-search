import { Avatar, Box, ListItemAvatar, Typography } from "@mui/material";

import { User } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";

export interface UserListItemInterface {
    user: User;
}

export function UserListItem({ user }: UserListItemInterface): JSX.Element {
    return (
        <ListItem>
            <Box>
                <ListItemAvatar>
                    <Avatar alt={`${user.name} avatar`} src={user.avatarUrl} />
                </ListItemAvatar>
            </Box>
            <Box>
                <Typography>{user.name ?? user.login}</Typography>
                <Typography>{user.login}</Typography>
                {user.bio ? <Typography>{user.bio}</Typography> : null}
                {user.location ? <Typography>{user.location}</Typography> : null}
            </Box>
        </ListItem>
    );
}
