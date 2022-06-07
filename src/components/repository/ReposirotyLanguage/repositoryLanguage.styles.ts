import { Box, styled } from "@mui/material";

export const RepositoryLanguageStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 14
}));

interface RepositoryLanguageColorStylesInterface {
    languageColor: string | undefined | null;
}

export const RepositoryLanguageColorStyles = styled(Box)<RepositoryLanguageColorStylesInterface>(
    ({ theme, languageColor }) => ({
        backgroundColor: languageColor ? languageColor : "grey",
        width: 12,
        height: 12,
        borderRadius: "50%",
        marginRight: 3
    })
);
