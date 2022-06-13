import { Box, ListItemIcon, styled, Typography } from "@mui/material";

import { ReactComponent as RepositoryIcon } from "../../images/repository.svg";

export const RepositoryListItemStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
}));

export const ListItemIconStyles = styled(ListItemIcon)(({ theme }) => ({
    minWidth: 0,
    width: 20,
    height: "auto",
}));

export const RepositoryIconStyles = styled(RepositoryIcon)(({ theme }) => ({
    height: 15,
    width: "auto",
}));

export const RepositoryListItemInfoStyled = styled(Box)(({ theme }) => ({
    marginLeft: 8,
}));

export const RepositoryListItemNameStyles = styled(Typography)(({ theme }) => ({
    overflowWrap: "anywhere"
}));

export const RepositoryListItemDescriptionStyles = styled(Typography)(({ theme }) => ({
    marginTop: 5,
    marginBottom: 15
}));

export const RepositoryListItemTechnicalInfoStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
}));

export const LicenseStyles = styled(Typography)(({ theme }) => ({
    marginLeft: 14,
}));
