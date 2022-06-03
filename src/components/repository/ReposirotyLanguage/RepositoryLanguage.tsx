import { Box, Typography } from "@mui/material";
import { Maybe } from "graphql/jsutils/Maybe";

export function RepositoryLanguage({ language, color }: { language: string; color?: string| Maybe<string> | undefined }): JSX.Element {
    return (
        <Box>
            <Box sx={{backgroundColor: color ?? "grey"}} width={12} height={12} borderRadius={"50%"}></Box>
            <Typography>{language}</Typography>
        </Box>
    );
}
