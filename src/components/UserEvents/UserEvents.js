import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'

class UserEvents extends Component {



    // todo: trzeba zaimplementować dane!

  render() {
    return (
      <EventList eventsData={this.props.events}></EventList>
      
    );
  }
}

export default UserEvents;