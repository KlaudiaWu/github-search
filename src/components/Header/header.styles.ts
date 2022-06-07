import { AppBar, Box, IconButton, styled, Toolbar } from "@mui/material";

import { ReactComponent as GitHubIcon } from "../../images/logo-github.svg";

export const HeaderStyles = styled(Box)(({ theme }) => ({
    flexGrow: 1,
}));

export const AppBarStyles = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

export const ToolbarStyles = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 0,
    justifyContent: "space-between",

    [theme.breakpoints.up("md")]: {
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 20,
        paddingRight: 20,
        minHeight: 0,
    },
}));

export const IconButtonStyles = styled(IconButton)(({ theme }) => ({
    padding: 0,
}));

export const GitHubIconStyles = styled(GitHubIcon)(({ theme }) => ({
    width: 38,
    height: 38,
}));
