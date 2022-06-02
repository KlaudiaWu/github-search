import { Box, Typography } from "@mui/material";
import { useContext } from "react";

import { useObservable } from "../../hooks/useObservable";
import { SearchListsContext } from "../../state/searchLists";


export function SearchListsResultsCounter(): JSX.Element {
    const { resultsTotalCount$ } = useContext(SearchListsContext);
    const totalCount: number = useObservable(resultsTotalCount$);

    return (
            <Box>
                <Typography>{totalCount} results</Typography>
            </Box>
    );
}
