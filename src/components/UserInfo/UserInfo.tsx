import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";

import { User } from "../../graphql/generated/graphql";
import { FollowersCount } from "../FollowersCount/FollowersCount";
import { StarsCount } from "../StarsCount/StarsCount";

import { FollowingCountStyles, UserInfoAvatarStyles, UserInfoStatsStyles, UserInfoStyles } from "./userInfo.styles";

interface locationPropState {
    entity: User;
}

export function UserInfo(): JSX.Element {
    const location = useLocation();
    const { entity } = location.state as locationPropState;

    return (
        <UserInfoStyles>
            <UserInfoAvatarStyles alt={`${entity.name} avatar`} src={entity.avatarUrl} />
            <Typography color="text.primary" variant="h1">{entity.name ?? entity.login}</Typography>
            <Typography color="text.secondary" variant="h3">{entity.login}</Typography>
            <UserInfoStatsStyles>
                <FollowersCount followersCount={entity.followers.totalCount} />
                <FollowingCountStyles color="text.secondary" variant="caption">{entity.following.totalCount} Following</FollowingCountStyles>
                <StarsCount starsCount={entity.starredRepositories.totalCount} />
            </UserInfoStatsStyles>
        </UserInfoStyles>
    );
}
