import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export function getDate(date: string | Date, format = "LL") {
    return dayjs(date).format(format)
}