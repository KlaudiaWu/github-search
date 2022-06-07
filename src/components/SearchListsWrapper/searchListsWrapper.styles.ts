import { Box, styled } from "@mui/material";

export const SearchListsWrapperStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    paddingLeft: 17,
    paddingRight: 17,

    [theme.breakpoints.up("md")]: {
        paddingLeft: 145,
        paddingRight: 145,
    },
}));
