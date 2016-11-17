import {createStore} from './node_modules/redux';

let initialState = {
    name: 'user',
    age: 30
};

/**
 * //Стандартный Action
 * action = {
 *     type = 'INCREASE_COUNTER', //строка или символ (должны быть глаголами)
 *	   payload = ..., //хоть что
 *	   error = true //Ошибка
 * }
**/
function reducer (state, action){
    
    switch(action.type){
        case 'SET_NAME':
        	return Object.assign({}, state, {name: action.payload.name});
        default:
            return state;
    }
}

let store = createStore(reducer, initialState);

console.log(store.getState());
store.subscribe(function(){
    console.log(store.getState());
});

store.dispatch({
    type: 'SET_NAME',
    payload: {name: 'Ivan'}
});
