import { combineReducers } from 'redux';
import login from './login';
import camera from './camera';

export default combineReducers({
  login,
  camera,
});
