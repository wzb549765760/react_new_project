import React, { Component } from 'react'
import { store } from "../redux/store"
import * as action from "../redux/action"
export default class ReduxHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: store.getState()
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        num: store.getState()
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={() => {
          store.dispatch(action.add(1))
        }}>加一</button>
        <button onClick={() => {
          store.dispatch(action.del(1))
        }}>减一</button>
      </div>
    )
  }
}
