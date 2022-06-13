import { dateFormat } from "../../../helpers/dateFormat";

import { RepositoryUpdateDateStyles } from "./repositoryUpdateDate.styles";

export function RepositoryUpdateDate({ date }: { date: Date | string }): JSX.Element {
    return <RepositoryUpdateDateStyles variant="caption" color="text.secondary">Updated {dateFormat(date)}</RepositoryUpdateDateStyles>;
}
