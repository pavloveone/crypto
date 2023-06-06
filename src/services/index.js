import { combineReducers } from 'redux';
import { directionsReducer } from './reducers/directions';
import { filterReducer } from './reducers/filter';
import { fromReducer } from './reducers/from';

export const rootReducer = combineReducers({
    directions: directionsReducer,
    filter: filterReducer,
    from: fromReducer
});