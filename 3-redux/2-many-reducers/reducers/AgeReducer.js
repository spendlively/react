import {INITIAL_STATE} from '../State';

export default function AgeReducer (state = INITIAL_STATE, action){
    
    switch(action.type){
        case 'SET_AGE':
            return Object.assign({}, state, {age: action.payload.age});
        default:
            return state;
    }
}
