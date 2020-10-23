import React, { Component, Fragment } from 'react';
// 多行标签 方式1<Fragment></Fragment> 方式2<></>
import time from "../assets/timg.jpg"
class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          asdf{Math.random()}
        </div>
        <div className="App">
          asdf{Math.random()}
        </div>
        图片方式1
        <img src={time} alt="asdf" width="100px" />
        图片方式2
        <img src={require("../assets/timg.jpg")} width="100px" alt="asdf" />
      </Fragment>
    );
  }
}

export default Home;
