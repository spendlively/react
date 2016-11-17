import {createStore, combineReducers} from './node_modules/redux';
import NameReducer from './reducers/NameReducer';
import AgeReducer from './reducers/AgeReducer';
import {INITIAL_STATE} from './State';

let reducers = combineReducers({
  nameState: NameReducer,
  ageState: AgeReducer
});

let store = createStore(reducers, INITIAL_STATE);

console.log(store.getState());
store.subscribe(function(){
    console.log(store.getState());
});

store.dispatch({
    type: 'SET_NAME',
    payload: {name: 'Ivan'}
});

store.dispatch({
    type: 'SET_AGE',
    payload: {age: 31}
});

// Результат
//{name: 'user', age: 30} => {name: 'Ivan', age: 30} => {name: 'Ivan', age: 31}
