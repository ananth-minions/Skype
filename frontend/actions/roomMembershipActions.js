import * as APIUtil from '../services/roomMembershipAPIService';

export const RECEIVE_ALL_ROOM_MEMBERSHIPS = 'RECEIVE_ALL_ROOM_MEMBERSHIPS';

export const receiveRoomMemberships = roomMemberships => {
  return {
    type: RECEIVE_ALL_ROOM_MEMBERSHIPS,
    payload: roomMemberships 
  }
}

export const fetchRoomMemberships = () => dispatch => {
  return APIUtil.fetchRoomMemberships()
    .then(roomMemberships => {
      dispatch(receiveRoomMemberships(roomMemberships));
    }, err => {
      console.log(err);
    }) 
}