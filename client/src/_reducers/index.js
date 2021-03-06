import { combineReducers } from 'redux';
import user from './user_reducer';
import schedule from './schedule_reducer';

const rootReducer = combineReducers({
    user, schedule
});

export default rootReducer;