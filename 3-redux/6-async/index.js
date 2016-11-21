import React from './node_modules/react';
import {Provider} from './node_modules/react-redux';
import ReactDOM from './node_modules/react-dom';
import TestContainer from './components/TestContainer';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TestContainer />
  </Provider>,
  document.getElementById('container')
)
