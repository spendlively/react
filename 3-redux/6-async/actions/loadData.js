
export default function loadData(value = '') {

	return function(dispatch){

    	dispatch({
      		type: 'LOAD_DATA'
    	})

		setTimeout(function(){

			dispatch({
				type: 'LOAD_DATA_SUCCESS',
				payload: {name: "Konstantin"}
			});
		}, 3000);
	}
}
