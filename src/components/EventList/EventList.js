import React, { Component } from 'react';
import EventListItem from '../EventListItem/EventListItem';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import './EventList.css';



class EventList extends Component {

  static defaultProps = {
    eventsData: [
      {
        title: 'TITLE MISSING',
        description: 'DESCRIPTION MISSING'
      }
    ]
  }

  static propTypes = {
    /**
     * Array of objects, usually from .json file
     */
    eventsData: PropTypes.array
  }

  render() {
    return (
      <div className='event-list-container'>
        {
          this.props.eventsData.map(
            event => (
              <div className='event-list-item-wrapper' key={event.id}>
                <div className='event-list-item-description'>
                  <EventListItem eventIcon={event.url} eventTitle={event.title} eventDescription={event.description} />
                </div>
                <div className='event-list-item-show'>
                  <Link to={`/events/${event.id}`}>SHOW DETAILS</Link>

                </div>
              </div>
            )
          )
        }
      </div>

    )
  }
}

export default EventList