import { Box, ListItemAvatar, Typography } from "@mui/material";

import { Repository } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";

export interface RepositoryListItemInterface {
    repository: Repository;
}

export function RepositoryListItem({ repository }: RepositoryListItemInterface): JSX.Element {
    return (
        <ListItem>
            <Box>
                <ListItemAvatar></ListItemAvatar>
            </Box>
            <Box>
                <Typography>{repository.nameWithOwner}</Typography>
                {repository.description ? <Typography>{repository.description}</Typography> : null}
                <Box>
                    <Typography>{repository.stargazerCount}</Typography>
                    <Typography>{repository.environment?.name}</Typography>
                    <Typography>{repository.licenseInfo?.name}</Typography>
                    <Typography>{repository.updatedAt}</Typography>
                    <Typography>{repository.issues.totalCount}</Typography>
                </Box>
            </Box>
        </ListItem>
    );
}
