import { Box, styled } from "@mui/material";

import { ReactComponent as StarIcon } from "../../images/star.svg";

export const StarsCountStyles = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
}));

export const StarIconStyles = styled(StarIcon)(({ theme }) => ({
    width: 14,
    height: "auto",
    margin: 4,
    marginLeft: 0
}));
