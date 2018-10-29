import React, { Component } from "react";
import "./EventDescription.css";
import { Typography, Grid, Button } from "@material-ui/core";
import BackButton from "../BackButton/BackButton";
import { withAuthContext } from "../../contexts/AuthContext";
import firebase from 'firebase'


const joinEvent = (eventId, userId) => {
  firebase.database().ref(`events/${eventId}/attendingUsers`).update({
    [userId]: true
  })
}
class EventDescription extends Component {
  
  
  render() {
    const { user } = this.props.authContext;
    if (this.props.event === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container justify='center'>

        <Grid item lg={12} md={12} sm={12} xs={12} >
          <Typography variant='h3' paragraph align='center'>
            {this.props.event.title}
          </Typography>
        </Grid>
  { 
    console.log(this.props.event.id) }
    {user &&
     console.log(user.uid)
    }
        <Grid item lg={4} md={4} sm={12} xs={12} >
          <Typography paragraph align='center'>
            <img className="EventDescription-image" src={this.props.event.icon} alt=""
            />
          </Typography>
        </Grid>

        <Grid item lg={8} md={8} sm={12}>
          <Typography variant='h5' paragraph align='center'>
            {this.props.event.fullDescription}
          </Typography>
        </Grid>
        <Grid item sm={10} md={10} lg={10} xs={10}>
          <Typography variant='h5'  align='right'>
            <BackButton />
            <Button onClick={() => joinEvent(this.props.event.id, user.uid)} variant='contained' color='primary' size='large'>Join this Event</Button>
          </Typography>
        </Grid>

      </Grid>
    );
  }
}

export default withAuthContext(EventDescription);
