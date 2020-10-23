import React, { Component } from 'react';
import Pubsub from "pubsub-js"
class BrotherOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 123
    }
  }
  pubsub() {
    // 发布订阅
    Pubsub.publish("eventName", this.state.num);
  }
  render() {
    return (
      <div>
        <button onClick={this.pubsub.bind(this)}>点我进行同级传值</button>
      </div>
    );
  }
}

export default BrotherOne
  ;