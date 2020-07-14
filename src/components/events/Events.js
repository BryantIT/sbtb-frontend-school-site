import React from 'react'
import EventCalendar from 'react-event-calendar'

const Events = () => {
  return (

      <EventCalendar
        month={7}
        year={2015}
        events={events}
        onEventClick={(target, eventData, day) => console.log(eventData)}
    />

  )
}

export default Events
