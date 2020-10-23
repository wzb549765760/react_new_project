import React, { Component } from 'react';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: props.test,
      childTest: "我是子组件数据"
    }
  }
  fun() {
    this.setState({
      test: "222"
    })
  }
  render() {
    return (
      <div>
        news---{this.state.test}--{this.props.test}
        <button onClick={() => {
          this.setState({
            test: "123"
          })
        }}>修改</button>
        <button onClick={this.fun.bind(this)}>修改1</button>
        <button onClick={this.props.fufun.bind(this, this.state.childTest)}>将数据给父组件</button>
      </div>
    );
  }
}

export default News;
