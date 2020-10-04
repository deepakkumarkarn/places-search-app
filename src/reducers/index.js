import { combineReducers } from 'redux';

import locationReducer from './locations';
import venueReducer from './venues'

const rootReducer = combineReducers({
    location: locationReducer,
    venue: venueReducer
});

export default rootReducer;