import {INITIAL_STATE} from '../State';

export default function NameReducer (state = INITIAL_STATE, action){
    
    switch(action.type){
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.payload.name});
        default:
            return state;
    }
}
