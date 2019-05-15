import { combineReducers } from 'redux';
import UserReducers from './UserReducers';

const rootReducer = combineReducers({
  users: UserReducers,
});

export default rootReducer;
