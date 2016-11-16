import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

export default class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}
