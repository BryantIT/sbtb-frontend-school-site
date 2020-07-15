import React from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const Events = ({ events }) => {
  return (
    <div>
      <h1>hello</h1>


    </div>

  )
}

const mapStateToProps = ({ events }) => {
  console.log(events)
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
