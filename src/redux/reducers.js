import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import userInfo from 'reducers/userinfo';

export default combineReducers({
    counter,
    userInfo
})
