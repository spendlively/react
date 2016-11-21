import {createStore, combineReducers, applyMiddleware} from './node_modules/redux';
import NameReducer from './reducers/NameReducer';
import NameModificator from './middlewares/NameModificator';
import createLogger from './node_modules/redux-logger';

const logger = createLogger();

let reducers = combineReducers({
  nameState: NameReducer
});

const store = createStore(
	reducers, 
	{}, 
	applyMiddleware(NameModificator, logger)
);

export default store;
