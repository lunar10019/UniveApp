import { differenceInHours, differenceInMinutes, format, isToday, isTomorrow, isYesterday } from "date-fns";


export const dayOfWeekFormat = (value: string) => {
 if (isTomorrow(new Date(value))) {
    return "Tomorrow"
 } else if (isToday(new Date(value))) {
    return "Today"
 } else {
    return format(new Date(value), "iii")
  }
}

export const timeAgo = (value: string) => {
   if (differenceInMinutes(new Date(), new Date(value)) < 60) {
      return `${differenceInMinutes(new Date(), new Date(value))} min`
   }
   if (differenceInHours(new Date(), new Date(value)) < 24) {
      return `${differenceInHours(new Date(), new Date(value))} hours`
   }
   if (isYesterday(new Date(value))) {
      return "Yesterday"
   } 
   return format(new Date(value), "iiii")
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