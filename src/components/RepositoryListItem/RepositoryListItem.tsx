import { Box, ListItemAvatar, Typography } from "@mui/material";

import { Repository } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";

export interface RepositoryListItemInterface {
    entity?: Repository;
}

export function RepositoryListItem({ entity }: RepositoryListItemInterface): JSX.Element {
    return (
        <ListItem>
            {entity ? (
                <Box>
                    <Box>
                        <ListItemAvatar></ListItemAvatar>
                    </Box>
                    <Box>
                        <Typography>{entity.nameWithOwner}</Typography>
                        {entity.description ? <Typography>{entity.description}</Typography> : null}
                        <Box>
                            <Typography>{entity.stargazerCount}</Typography>
                            <Typography>{entity.environment?.name}</Typography>
                            <Typography>{entity.licenseInfo?.name}</Typography>
                            <Typography>{entity.updatedAt}</Typography>
                            <Typography>{entity.issues.totalCount}</Typography>
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </ListItem>
    );
}
