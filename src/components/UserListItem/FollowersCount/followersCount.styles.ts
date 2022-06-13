import { Box, styled } from "@mui/material";

import { ReactComponent as FollowersIcon } from "../../../images/followers.svg";

export const FolloversCountStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

export const FollowersIconStyles = styled(FollowersIcon)(({ theme }) => ({
    width: 14,
    height: "auto",
    margin: 4,
}));
