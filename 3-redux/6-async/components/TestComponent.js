import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

export default class TestComponent extends React.Component {

  constructor(props) {
  	super(props);
  }

  onTextClick(e){
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onTextClick.bind(this)}>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
