import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)


const Events = ({ events }) => {


  return (
    events ?
    <div>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />

    </div> : ""

  )

}

const mapStateToProps = ({ events }) => {
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
