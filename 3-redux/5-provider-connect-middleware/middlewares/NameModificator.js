function NameModificator(store) {
	return function (next) {
    	return function (action) {

			action.payload.name += ' Sizikov';

      		return next(action);
    	};
  	};
};

export default NameModificator;



// const NameModificator = store => next => action => {

// 	action.payload.name += ' Sizikov';

// 	return next(action)
// }

// export default NameModificator;
