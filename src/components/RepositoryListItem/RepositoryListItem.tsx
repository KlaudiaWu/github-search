import { Box, ListItemAvatar, Typography } from "@mui/material";

import { Repository } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";
import { RepositoryUpdateDate } from "../RepositoryUpdateDate/RepositoryUpdateDate";

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
                            <Typography>{entity.stargazers.totalCount}</Typography>
                            {entity.languages && entity.languages.nodes && entity.languages.nodes.length > 0 ? <Typography>{entity.languages.nodes[0]?.name} {entity.languages.nodes[0]?.color}</Typography>: null}
                            <Typography>{entity.licenseInfo?.name}</Typography>
                            <RepositoryUpdateDate date={entity.updatedAt} />
                            {entity.issues ? <Typography>{entity.issues.totalCount}</Typography> : null}
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </ListItem>
    );
}
