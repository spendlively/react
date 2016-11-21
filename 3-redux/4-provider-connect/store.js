import {createStore, combineReducers} from './node_modules/redux';
import NameReducer from './reducers/NameReducer';

let reducers = combineReducers({
  nameState: NameReducer
});

const store = createStore(reducers);

export default store;
