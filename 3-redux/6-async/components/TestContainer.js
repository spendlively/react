import React from '../node_modules/react';
import {connect} from '../node_modules/react-redux';
import {bindActionCreators} from '../node_modules/redux';
import TestComponent from './TestComponent';
import loadData from '../actions/loadData'

class TestContainer extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    const loadData = this.props.loadData;

    return (
      <div>
        <TestComponent name={this.props.user.name} loadData={loadData} />
      </div>
    );
  }
}

//Биндит свойство store в свойство компонента
function mapStateToProps (state) {
  return {
    user: state.nameState
  }
}

//Биндит метод dispatch store в функцию компонента
function mapDispatchToProps(dispatch) {
  return {
    loadData: bindActionCreators(loadData, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
