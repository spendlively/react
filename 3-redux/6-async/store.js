import {createStore, combineReducers, applyMiddleware} from './node_modules/redux';
import NameReducer from './reducers/NameReducer';
import createLogger from './node_modules/redux-logger';
import thunk from './node_modules/redux-thunk'

const logger = createLogger();

let reducers = combineReducers({
  	nameState: NameReducer
});

const store = createStore(
	reducers, 
	{}, 
	applyMiddleware(thunk, logger)
);

export default store;
