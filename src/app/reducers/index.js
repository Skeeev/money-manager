import { combineReducers } from 'redux';
import transactions from './transactions';
import settings from './settings';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  transactions,
  settings,
  form: reduxFormReducer
});