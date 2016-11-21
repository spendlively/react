const defaultState = {
	name: 'Guest'
};

export default function NameReducer (state = defaultState, action){
    
    switch(action.type){
        case 'SET_NAME':
            return Object.assign({}, state, {name: action.payload.name});
        default:
            return state;
    }
}
