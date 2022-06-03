import { Box, ListItemAvatar, Typography } from "@mui/material";

import { Repository } from "../../../graphql/generated/graphql";

import { ListItem } from "../../ListItem/ListItem";
import { RepositoryLanguage } from "../ReposirotyLanguage/RepositoryLanguage";
import { RepositoryIssueCount } from "../RepositoryIssueCount/RepositoryIssueCount";
import { RepositoryStargazersCount } from "../RepositoryStargazersCount/RepositoryStargazersCount";
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
                            {entity.stargazers && entity.stargazers.totalCount && entity.stargazers.totalCount > 0 ? (
                                <RepositoryStargazersCount stargazersCount={entity.stargazers.totalCount} />
                            ) : null}
                            {entity.languages &&
                            entity.languages.nodes &&
                            entity.languages.nodes.length > 0 &&
                            entity.languages.nodes[0]?.name ? (
                                <RepositoryLanguage
                                    language={entity.languages.nodes[0]?.name}
                                    color={entity.languages.nodes[0]?.color}
                                />
                            ) : null}
                            <Typography>{entity.licenseInfo?.name}</Typography>
                            <RepositoryUpdateDate date={entity.updatedAt} />
                            {entity.issues && entity.issues.totalCount && entity.issues.totalCount > 0 ? (
                                <RepositoryIssueCount issuesCount={entity.issues.totalCount} />
                            ) : null}
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </ListItem>
    );
}
