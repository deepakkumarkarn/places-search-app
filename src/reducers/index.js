import { combineReducers } from 'redux';

import locationReducer from './locations';
import venueReducer from './venues';
import areaSelectorReducer from './map-area';

const rootReducer = combineReducers({
    location: locationReducer,
    venue: venueReducer,
    area: areaSelectorReducer
});

export default rootReducer;