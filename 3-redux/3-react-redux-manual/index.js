import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import TestContainer from './components/TestContainer';
import store from './store';

ReactDOM.render(
  <TestContainer data={{name: "Guest"}}/>,
  document.getElementById('container')
);

store.subscribe(function(){

	let state = store.getState();

	ReactDOM.render(
	  <TestContainer data={{name: state.nameState.name}} />,
	  document.getElementById('container')
	);	
});

setTimeout(function(){

	store.dispatch({
		type: 'SET_NAME',
		payload: {name: "Konstantin"}
	});
}, 3000);
