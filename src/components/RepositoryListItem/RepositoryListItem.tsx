import { Box } from "@mui/material";

import { Repository } from "../../graphql/generated/graphql";

import { ListItem } from "../ListItem/ListItem";
import { RepositoryLanguage } from "./ReposirotyLanguage/RepositoryLanguage";
import { RepositoryIssueCount } from "./RepositoryIssueCount/RepositoryIssueCount";
import { StarsCount } from "../StarsCount/StarsCount";
import { RepositoryUpdateDate } from "./RepositoryUpdateDate/RepositoryUpdateDate";

import {
    LicenseStyles,
    ListItemIconStyles,
    RepositoryIconStyles,
    RepositoryListItemDescriptionStyles,
    RepositoryListItemInfoStyled,
    RepositoryListItemNameStyles,
    RepositoryListItemStyled,
    RepositoryListItemTechnicalInfoStyled,
} from "./repositoryLisItem.styles";

export interface RepositoryListItemInterface {
    entity?: Repository;
}

export function RepositoryListItem({ entity }: RepositoryListItemInterface): JSX.Element {
    return (
        <>
            {entity && entity.id ? (
                <ListItem key={entity.id}>
                    <RepositoryListItemStyled>
                        <Box>
                            <ListItemIconStyles>
                                <RepositoryIconStyles />
                            </ListItemIconStyles>
                        </Box>
                        <RepositoryListItemInfoStyled>
                            <RepositoryListItemNameStyles variant="h4" color="action.active">
                                {entity.nameWithOwner}
                            </RepositoryListItemNameStyles>
                            {entity.description ? (
                                <RepositoryListItemDescriptionStyles variant="body1" color="text.secondary">
                                    {entity.description}
                                </RepositoryListItemDescriptionStyles>
                            ) : null}
                            <RepositoryListItemTechnicalInfoStyled>
                                {entity.stargazers &&
                                entity.stargazers.totalCount &&
                                entity.stargazers.totalCount > 0 ? (
                                    <StarsCount starsCount={entity.stargazers.totalCount} />
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
                                {entity.licenseInfo ? (
                                    <LicenseStyles variant="caption" color="text.secondary">
                                        {entity.licenseInfo?.name}
                                    </LicenseStyles>
                                ) : null}
                                <RepositoryUpdateDate date={entity.updatedAt} />
                                {entity.issues && entity.issues.totalCount && entity.issues.totalCount > 0 ? (
                                    <RepositoryIssueCount issuesCount={entity.issues.totalCount} />
                                ) : null}
                            </RepositoryListItemTechnicalInfoStyled>
                        </RepositoryListItemInfoStyled>
                    </RepositoryListItemStyled>
                </ListItem>
            ) : null}
        </>
    );
}
