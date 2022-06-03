import { Typography } from "@mui/material";

import { dateFormat } from "../../../helpers/dateFormat";

export function RepositoryUpdateDate({ date }: { date: Date | string }): JSX.Element {
    return <Typography>Updated {dateFormat(date)}</Typography>;
}
