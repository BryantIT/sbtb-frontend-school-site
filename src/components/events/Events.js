import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

class Events extends Component {


render() {
  console.log("Why are you null?", this.props.events)
  return (
    <div>
      <h1>hello</h1>
      {
        this.props.events.map(e =>
        <h1>{e.attributes.title}</h1>)
      }


    </div>

  )
}

}

const mapStateToProps = state => ({ events: state.events })

export default connect(mapStateToProps)(Events)
