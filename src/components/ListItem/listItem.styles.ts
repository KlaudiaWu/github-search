import { Box, ListItem, styled } from "@mui/material";

export const ListItemStyles = styled(ListItem)(({ theme }) => ({
    margin: 0,
    padding: 0,
    width: "100%",
}));

export const ListItemWrapperStyles = styled(Box)(({ theme }) => ({
    width: "100%",
}));

export const ListItemChildStyles = styled(Box)(({ theme }) => ({
    marginTop: 22,
    marginBottom: 16,

    [theme.breakpoints.up("md")]: {
        marginTop: 20,
    },
}));
