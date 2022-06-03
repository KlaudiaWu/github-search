import { Box, Typography } from "@mui/material";

import { ReactComponent as StarIcon } from '../../../images/star.svg';


export function RepositoryStargazersCount({ stargazersCount }: { stargazersCount: number }): JSX.Element {
    return <Box><StarIcon width={14} height={14}/><Typography> {stargazersCount}</Typography></Box>;
}