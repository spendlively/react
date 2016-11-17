import {createStore} from './node_modules/redux';

let initialState = {
    issues: [],
    repository: '',
    counter: 0
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
    switch(state.type){
        case 'ENCREASE_COUNTER':
            return {...state, ...{counter: (state.counter + 1)}}
        case 'RESET_COUNTER':
            return Object.assign({counter: 0}, state);
        case 'LOAD_ISSUES':
            return Object.assign({issues: action.payload}, state);
        default:
            return state;
    }
}

let store = createStore(reducer, initialState);

store.subscribe(function(){
    console.log(store.getState());
});

store.dispatch({
    type: 'ENCREASE_COUNTER',
});
//state = {...conter: 1}

store.dispatch({
    type: 'RESET_COUNTER',
});
//state = {...conter: 0}

store.dispatch({
    type: 'LOAD_ISSUES',
    payload: [{id: 1, text: 'issue 1'}, {id: 2, text: 'issue 2'}]
});
