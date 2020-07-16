import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Events extends Component {

  render(){
    return (
      <div>
        <Iframe url="https://calendar.google.com/calendar/embed?src=uvcn0gpnkm9s9d3ogbmk9tqv3c%40group.calendar.google.com&ctz=America%2FChicago"
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FChicago&amp;src=dXZjbjBncG5rbTlzOWQzb2dibWs5dHF2M2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%239E69AF&amp;color=%23009688&amp;title=Bayside%20High%20Events'
        width="100%"
        height="800px"
        id="myId"
        className="responsiveCal"
        display="initial"
        position="absolute"/>
      </div>
    )
  }
}

export default Events
