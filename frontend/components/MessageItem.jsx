import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    // at first assume that the message is a sent message 
    let receivedMessage = false;

    const { message, currentUserId} = this.props;
    const { body, created_at, status, user_id} = message;
    console.log("received message user id", user_id);
    console.log("my user id", currentUserId)
    // check whether or not the message is by the current user
    if (user_id !== currentUserId) {
      console.log("COMON!")
      let receivedMessage = true
    }

    return(
      <div className={'message-item ' + (receivedMessage ? 'received' : '')}>
        <div className='bubble'>
          <div className='content'>
            <p>{body}</p>
          </div>
          <div className='timestamp'>
            <p>{ new Date(created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }</p>
          </div> 
        </div>
        <div className='delivery-status'>
          <span>{status === 0 ? 'Sent' : 'Sending'}</span>
        </div>
      </div>
    );
  } 
}


export default MessageItem;