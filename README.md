# wyverns.info

## General Function:

The site pulls event data from the google calendar api.

There are a few contextual strings that can be added to event descriptions to enable functionality on the site.

## tags

### Event type tag 
- e.g. `[[home]]` or `[[practice]]`
- should be included at the very top of the description
- only one event type tag should be included
- types of events enumerated at `src/components/EventList/types.ts`
- if the tag term (e.g. 'practice') is already included in the calendar event's name, and no explicit event type tag is present, the event type will be inferred from the title.

### Participant info section tag
- e.g. `Participants:`
- all text after the Participants info tag will appear in a secondary dropdown within the description labeled "Participant Info"

## Development:

run with `npm run dev`

### dev TODOs:
- shake expansion buttons
- filter button animation

