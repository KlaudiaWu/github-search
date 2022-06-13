import { Typography } from "@mui/material";

import { Maybe } from "graphql/jsutils/Maybe";

import { RepositoryLanguageColorStyles, RepositoryLanguageStyles } from "./repositoryLanguage.styles";

export function RepositoryLanguage({ language, color }: { language: string; color?: string| Maybe<string> | undefined }): JSX.Element {
    return (
        <RepositoryLanguageStyles>
            <RepositoryLanguageColorStyles languageColor={color} />
            <Typography variant="caption" color="text.secondary"> {language}</Typography>
        </RepositoryLanguageStyles>
    );
}
