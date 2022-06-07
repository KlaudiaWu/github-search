import { Avatar, Box, styled, Typography } from "@mui/material";

export const UserInfoStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

export const UserInfoAvatarStyles = styled(Avatar)(({ theme }) => ({
    width: 296,
    height: 296,
    marginBottom: 16
}));

export const UserInfoStatsStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13
}));

export const FollowingCountStyles = styled(Typography)(({ theme }) => ({
    marginLeft: 19,
    marginRight: 19,
}));


