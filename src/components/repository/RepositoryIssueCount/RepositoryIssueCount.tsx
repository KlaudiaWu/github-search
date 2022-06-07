import { RepositoryIssueCountStyles } from "./repositoryIssueCount.styles";

export function RepositoryIssueCount({ issuesCount }: { issuesCount: number }): JSX.Element {
    return <RepositoryIssueCountStyles variant="caption" color="text.secondary">{issuesCount} {issuesCount > 1 ? "issues" : "issue"} need help</RepositoryIssueCountStyles>;
}