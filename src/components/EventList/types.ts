export type CalendarEvent = {
    summary: string;
    description: string;
    start: {
        date?: string;
        dateTime?: string;
    }
    end: {
        date?: string;
        dateTime?: string;
    }
    recurrence?: [string] | undefined;
    location?: string;
    hangoutLink?: string;
};