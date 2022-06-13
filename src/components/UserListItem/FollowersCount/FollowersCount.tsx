import { Typography } from "@mui/material";

import { FolloversCountStyles, FollowersIconStyles } from "./followersCount.styles";

export function FollowersCount({ followersCount }: { followersCount: number }): JSX.Element {
    return (
        <FolloversCountStyles>
            <FollowersIconStyles />
            <Typography color="text.secondary" variant="caption">
                {" "}
                {followersCount} Followers
            </Typography>
        </FolloversCountStyles>
    );
}
