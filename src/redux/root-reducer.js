import userReducer from './user/user.reduсer';
import { combineReducers } from 'redux';

export default combineReducers({
    user: userReducer
})