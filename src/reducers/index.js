import { combineReducers } from 'redux';

// combine reducers here
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer

})

export default rootReducer