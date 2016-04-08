import React, { Component } from 'react';
import { Link } from 'react-router';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var renderItem = this.props.renderItem || this.renderItem;
    var className = this.props.className;
    return <ul className={className}> {this.props.items.map(renderItem)} </ul>;
  }

  renderItem(item) {
    return <li>{item}</li>;
  }
}

export default List;
