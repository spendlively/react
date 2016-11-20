import React from '../node_modules/react';
import TestComponent from './TestComponent';

export default class TestContainer extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {
    return (
      <div>
        <TestComponent name={this.props.data.name} />
      </div>
    );
  }
}
