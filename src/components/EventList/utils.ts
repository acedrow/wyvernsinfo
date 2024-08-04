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

const recurrenceRegex = /RRULE:FREQ=(\w+);BYDAY=(\d*)(\w+)/gim;

const bydayToDayString = {
  mo: "Monday",
  tu: "Tuesday",
  we: "Wednesday",
  th: "Thursday",
  fr: "Friday",
  sa: "Saturday",
  su: "Sunday",
};

export const parseRecurrenceString = (recurrence: string): string => {
  const matches = [...recurrence.matchAll(recurrenceRegex)];
  const values = {
    frequency: matches[0][1].toLowerCase(),
    dayNumber: parseInt(matches[0][2].toLowerCase()),
    dayOfWeek: matches[0][3].toLowerCase(),
  };

  console.log("values", values);

  return `
  ${values.frequency === "weekly" ? "Each" : ""}
  ${
    values.frequency === "monthly"
      ? `${ordinal_suffix_of(values.dayNumber)}`
      : ""
  }
  ${
    //@ts-ignore
    bydayToDayString[values.dayOfWeek]
  }
    ${
    values.frequency === "monthly"
      ? `of the month`
      : ""
  }
  `;
};
