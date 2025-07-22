import dayjs from "dayjs";
import { CalendarEvent, EventType } from "./types";

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

const recurrenceRegex = /RRULE:FREQ=(\w+);[\w=;]*BYDAY=(\d*)(\w+)/gim;

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
    ${values.frequency === "monthly" ? `of the month` : ""}
  `;
};

export const sortEventsByStartTime = (a: CalendarEvent, b: CalendarEvent): number => {
  if (a.recurrence) {
    if (b.recurrence) {
      return 0;
    }
    return -1;
  }
  return dayjs(a?.start?.date ?? a.start.dateTime).isBefore(
    dayjs(b?.start?.date ?? b.start.dateTime)
  )
    ? -1
    : 1;
};

export const sortEventsByStartTimeNoRecur = (a: CalendarEvent, b: CalendarEvent): number => {
  return dayjs(a?.start?.date ?? a.start.dateTime).isBefore(
    dayjs(b?.start?.date ?? b.start.dateTime)
  )
    ? -1
    : 1;
};

export const filterEvents = (
  showEvents: boolean,
  showPractices: boolean,
  showMeetings: boolean,
  allEvents: CalendarEvent[]
) => {
  let filteredEvents = allEvents;

  if (showEvents && showPractices && showMeetings) {
    return filteredEvents;
  }

  if (!showEvents) {
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.summary.toLowerCase().includes("meeting") ||
        event.summary.toLowerCase().includes("practice")
    );
  }

  if (!showPractices) {
    filteredEvents = filteredEvents.filter(
      (event) => !event.summary.toLowerCase().includes("practice")
    );
  }

  if (!showMeetings) {
    filteredEvents = filteredEvents.filter(
      (event) => !event.summary.toLowerCase().includes("meeting")
    );
  }

  return filteredEvents;
};

export const  matchEventType = /\[\[([\w\s]+)]]/gim;


export const getEventType = (event: CalendarEvent) => {
  if (!event?.description) {
    return EventType.none;
  }
  const tag = [...event?.description?.matchAll(matchEventType)]?.[0]?.[1];
  
  const matchAgainst = tag ?? event?.summary.toLowerCase()

  if (matchAgainst?.includes("home")) {
    return EventType.home;
  }
  if (matchAgainst?.includes("away")) {
    return EventType.away;
  }
  if (matchAgainst?.includes("practice")) {
    return EventType.practice;
  }
  if (matchAgainst?.includes("meeting")) {
    return EventType.meeting;
  }
  return EventType.none;
};
