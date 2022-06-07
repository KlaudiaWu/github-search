import { Avatar, Box, ListItemAvatar, styled, Typography } from "@mui/material";

export const UserListItemStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
}));

export const ListItemAvatarStyled = styled(ListItemAvatar)(({ theme }) => ({
    minWidth: 0,
    width: 20,
    height: "auto"
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20
}));

export const UserListItemInfoStyled = styled(Box)(({ theme }) => ({
    marginLeft: 8
}));

export const LoginStyled = styled(Typography)(({ theme }) => ({
    marginBottom: 20
}));

export const BioStyled = styled(Typography)(({ theme }) => ({
    marginBottom: 8
}));

export const LocationStyled = styled(Typography)(({ theme }) => ({
}));