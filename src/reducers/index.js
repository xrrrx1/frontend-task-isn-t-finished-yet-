import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import hotelsReducer from './hotelsReducer';

export default combineReducers({
  hotels: hotelsReducer,
  // form: formReducer,
});
