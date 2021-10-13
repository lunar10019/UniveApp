import { format, isToday, isTomorrow } from "date-fns";


export const dayOfWeekFormat = (value: string) => {
if (isTomorrow(new Date(value))) {
        return "Tomorrow"
    } else if (isToday(new Date(value))) {
        return "Today"
    } else {
        return format(new Date(value), "iii")
    }
}

export const dayOfMonthFormat = (value: string) => {
     return format(new Date(value), "dd")
}

export const monthFormat = (value: string) => {
    return format(new Date(value), "MMMM")
}

export const timeFormat = (value: string) => {
    return format(new Date(value), "p")
}