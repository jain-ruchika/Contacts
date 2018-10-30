import {combineReducer} from 'redux';
import contactReducer from './contactReducer';

export default combineReducer({
    contacts : contactReducer
})