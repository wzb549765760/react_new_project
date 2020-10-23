import React, { Component, Fragment } from 'react';
import BrotherOne from "./BrotherOne";
import BrotherTwo from "./BrotherTwo";
class Brother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 123,
      ziText: "我是默认值"
    }
  }
  render() {
    return (
      <Fragment>
        <BrotherOne />
        <BrotherTwo />
      </Fragment>
    );
  }
}

export default Brother;
