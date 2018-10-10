import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventListItem.css';

class EventListItem extends Component {

  static defaultProps = {
    eventIcon: '/event-icons/PH.png',
    eventTitle: 'TITLE MISSING',
    eventDescription: 'DESCRIPTION MISSING',
  }
  
  static propTypes = {
    eventIcon: PropTypes.string,
    eventTitle: PropTypes.string,
    eventDescription: PropTypes.string,
  }
  
  render() {
    return (
      <>
        <div className='item-container'>
          <div className='img-container'>
            <img src={this.props.eventIcon} alt='event icon' />
          </div>

          <div className='text-container'>
            <h1>{this.props.eventTitle}</h1>
            <p>{this.props.eventDescription}</p>
          </div>

          <div className='button-container'>
            <button className='button-details'>SHOW DETAILS</button>
          </div>
        </div>
      </>
    )
  }
}



export default EventListItem