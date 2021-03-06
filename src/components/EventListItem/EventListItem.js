import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventListItem.css';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { Link } from "react-router-dom";




class EventListItem extends Component {

  static defaultProps = {
    eventIcon: 'https://static.thenounproject.com/png/656-200.png',
    eventTitle: 'TITLE MISSING',
    eventDescription: 'DESCRIPTION MISSING',
  }

  static propTypes = {
    /**
     * Event icon url adress
     */
    eventIcon: PropTypes.string,
    /**
     * Title for the event 
     */
    eventTitle: PropTypes.string,
    /**
     * Description for the event 
     */
    eventDescription: PropTypes.string,
  }

  render() {
    return (

      <GridListTile
        component={Link}
        to={`/events/${this.props.id}`}
      >
        <div style={{ backgroundImage: `url(${this.props.eventIcon})`, width: 250, height: 250 }}></div>
        {/* <img src={this.props.eventIcon} alt={this.props.eventTitle} /> */}

        <GridListTileBar
          title={this.props.eventTitle}
          subtitle={<>{this.props.eventDescription}</>}
        />
      </GridListTile>

    )
  }
}



export default EventListItem

