const defaultState = {
	name: 'Guest'
};

export default function NameReducer (state = defaultState, action){
    
    switch(action.type){
        case 'LOAD_DATA':
            return Object.assign({}, state);
        case 'LOAD_DATA_SUCCESS':
            return Object.assign({}, state, {name: action.payload.name});
        default:
            return state;
    }
}
