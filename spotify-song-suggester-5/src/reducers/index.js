import {combineReducers} from 'redux'
import songReducer from './songReducer';
import userReducer from './userReducer';

const combineReducers = () => ({
songReducer,
userReducer
})

export default combineReducers;