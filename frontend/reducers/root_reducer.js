import { combineReducers } from 'redux';

import entities from './entities_reducer';
import filters from './filters_reducer';

const rootReducer = combineReducers({
  entities,
  filters
});

export default rootReducer;
