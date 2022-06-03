import { Typography } from "@mui/material";

export function RepositoryIssueCount({ issuesCount }: { issuesCount: number }): JSX.Element {
    return <Typography>{issuesCount} {issuesCount > 1 ? "issues" : "issue"} need help</Typography>;
}