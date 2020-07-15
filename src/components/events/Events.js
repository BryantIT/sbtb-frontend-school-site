import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'rc-calendar';
import moment from 'moment';


const format = 'YYYY-MM-DD';
const now = moment();

const Events = ({ events }) => {


  return (
    events ?
    <div>
      <Calendar />

    </div> : ""

  )

}

const mapStateToProps = ({ events }) => {
  return {
    events
  }
}

export default connect(mapStateToProps)(Events)
