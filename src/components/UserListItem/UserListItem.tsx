import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { User } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";

import {
    AvatarStyled,
    BioStyled,
    ListItemAvatarStyled,
    LocationStyled,
    LoginStyled,
    UserListItemInfoStyled,
    UserListItemStyles,
} from "./userListItem.styles";

export interface UserListItemInterface {
    // Name of entity props must be "entity", not "user", becouse of SearchListItems
    // I think, it has to by typed ad EntityListItemPropsInterface, and all of [Entity]}ListItems
    // has to have this interface as props
    entity?: User;
}

export function UserListItem({ entity }: UserListItemInterface): JSX.Element {
    const navigate = useNavigate();

    const handleUserClick = () => {
        if (entity) {
            navigate(`/user/${entity.id}`, { state: { entity: entity } });
        }
    };

    return (
        <>
            {entity && entity.id ? (
                <ListItem key={entity.id}>
                    <UserListItemStyles onClick={handleUserClick}>
                        <Box>
                            <ListItemAvatarStyled>
                                <AvatarStyled alt={`${entity.name} avatar`} src={entity.avatarUrl} />
                            </ListItemAvatarStyled>
                        </Box>
                        <UserListItemInfoStyled>
                            <Typography variant="h4" color="action.active">
                                {entity.name ?? entity.login}
                            </Typography>
                            <LoginStyled variant="body1" color="text.secondary">
                                {entity.login}
                            </LoginStyled>
                            {entity.bio ? (
                                <BioStyled variant="body2" color="text.primary">
                                    {entity.bio}
                                </BioStyled>
                            ) : null}
                            {entity.location ? (
                                <LocationStyled variant="caption" color="text.secondary">
                                    {entity.location}
                                </LocationStyled>
                            ) : null}
                        </UserListItemInfoStyled>
                    </UserListItemStyles>
                </ListItem>
            ) : null}
        </>
    );
}
