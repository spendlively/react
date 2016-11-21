import React from '../node_modules/react';
import {connect} from '../node_modules/react-redux';
import TestComponent from './TestComponent';

class TestContainer extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {
    return (
      <div>
        <TestComponent name={this.props.user.name} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.nameState
  }
}

export default connect(mapStateToProps)(TestContainer);
