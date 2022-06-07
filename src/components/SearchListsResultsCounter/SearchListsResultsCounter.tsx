import { Typography } from "@mui/material";
import { useContext } from "react";

import { useObservable } from "../../hooks/useObservable";
import { numberWithCommas } from "../../helpers/numberWithCommas";
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
