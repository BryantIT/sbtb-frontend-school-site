import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const Events = ({ events }) => {


  return (
    events ?
    <div>
      <h1>hello</h1>
      <p>{events.length}</p>

    </div> : ""

  )

}

const mapStateToProps = ({ events }) => {
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
