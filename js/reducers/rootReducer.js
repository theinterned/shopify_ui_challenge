/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import contacts from './contactReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ contacts })


export default rootReducer;
