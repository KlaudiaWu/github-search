import moment from "moment";

export function dateFormat(date: Date | string): string {
    let format = "D MMM YYYY";
    let formatIfLessThanYear = "D MMM";

    const now = moment(new Date());
    const fromNow = moment.duration(now.diff(date));

    if (fromNow.asDays() > 14) {
        if (fromNow.asYears() < 1) {
            return `on ${moment(date).format(formatIfLessThanYear)}`;
        }
        return `on ${moment(date).format(format)}`;
    }
    return `${fromNow.humanize(true)}`;
}
