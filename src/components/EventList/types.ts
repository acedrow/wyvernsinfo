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
    id: string;
};

export enum EventType {
    home = 'home',
    away = 'away',
    practice = 'practice',
    meeting = 'meeting',
    none = 'none'
  }