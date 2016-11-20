export default function NameReducer (state = {}, action){
    
    switch(action.type){
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.payload.name});
        default:
            return state;
    }
}
