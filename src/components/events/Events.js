import React from 'react';
import { connect } from 'react-redux';
import EventCalendar from 'react-event-calendar';

const Events = ({ events }) => {
  return (

      <EventCalendar
        month={7}
        year={2015}
        events={events}
        onEventClick={(target, eventData, day) => console.log(eventData)}
    />

  )
}

const mapStateToProps = ({ events }) => {
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
