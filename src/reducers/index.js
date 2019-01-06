import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import current from "./reducer-pages"

const allReducers = combineReducers({
    users: UserReducer,
    currentPage: current,
});

export default allReducers