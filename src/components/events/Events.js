import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const Events = ({ events }) => {



  console.log("Why are you null?", events)
  return (
    <div>
      <h1>hello</h1>
      <p>{events.length}</p>
    </div>

  )

}

const mapStateToProps = ({ events }) => {
  console.log("mapStateToProps", events)
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
