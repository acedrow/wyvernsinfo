export function ordinal_suffix_of(i: number) {
  let j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

const recurrenceRegex = /RRULE:FREQ=(\w+);BYDAY=(\d*)(\w+)/gmi

type RecurrenceValues = {
  frequency: string | undefined;
  dayNumber: string | undefined;
  dayOfWeek: string | undefined;
}

export const parseRecurrenceString (recurrence: string) : RecurrenceValues => {
    const matches = [...recurrence.matchAll(recurrenceRegex)]
    console.log('matches', matches)
    return ({
      frequency: matches[0];
    })
}