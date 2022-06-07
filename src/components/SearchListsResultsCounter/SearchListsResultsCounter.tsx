import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { numberWithCommas } from "../../helpers/numberWithCommas";

import { useObservable } from "../../hooks/useObservable";

import { SearchListsContext } from "../../state/searchLists";

import { SearchListsResultsCounterStyles } from "./searchListsResultsCounter.styles";

export function SearchListsResultsCounter(): JSX.Element {
    const { resultsTotalCount$ } = useContext(SearchListsContext);
    const totalCount: number = useObservable(resultsTotalCount$);

    return (
        <SearchListsResultsCounterStyles>
            <Typography variant="h2" color="common.black">
                {numberWithCommas(totalCount)} results
            </Typography>
        </SearchListsResultsCounterStyles>
    );
}
