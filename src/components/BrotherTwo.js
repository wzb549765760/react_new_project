import React, { Component } from 'react'
import Pubsub from "pubsub-js"
export default class BrotherTwo extends Component {
  constructor(props) {
    super(props);
    // 订阅指定消息
    Pubsub.subscribe("eventName", (topic, message) => {
      console.log(message)
    })
  }
  render() {
    return (
      <div>
        BrotherTwo
      </div>
    )
  }
}
