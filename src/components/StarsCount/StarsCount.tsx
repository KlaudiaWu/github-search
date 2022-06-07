import { Typography } from "@mui/material";

import { StarIconStyles, StarsCountStyles } from "./starsCount.styles";

export function StarsCount({ starsCount }: { starsCount: number }): JSX.Element {
    return (
        <StarsCountStyles>
            <StarIconStyles />
            <Typography color="text.secondary" variant="caption">
                {" "}
                {starsCount}
            </Typography>
        </StarsCountStyles>
    );
}
