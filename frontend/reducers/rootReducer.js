import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import messagesReducer from './messagesReducer';
import roomMembershipsReducer from './roomMembershipsReducer';
import friendReducer from './friendReducer';
import uiReducer from './uiReducer';
import potentialFriendsReducer from './potentialFriendsReducer';
import recentRoomsReducer from './recentRoomsReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
  friends: friendReducer,
  recents: recentRoomsReducer,
  roomMemberships: roomMembershipsReducer,
  potentialFriends: potentialFriendsReducer,
  ui: uiReducer
});

export default rootReducer;