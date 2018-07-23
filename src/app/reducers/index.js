import { combineReducers } from 'redux';
import transactionsMode from './transactions-mode';
import settingsMode from './settings-mode';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  transactionsMode,
  settingsMode,
  form: reduxFormReducer
});