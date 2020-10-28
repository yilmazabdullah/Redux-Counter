import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const reducers = combineReducers({
	counterReducer: counterReducer, // counterReducer ile aynı anlama geliyor
});

export default reducers;
