import React, { Component } from 'react';
// json-server 模拟数据的 npm i json-server -g
// 启动 cd mock文件夹下
// json-server json数据的名字 --port 4000      json-server .\data.json --port 4000
// axios 请求数据 npm i json-server --save
import axios from 'axios'
class JsonServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
  }
  componentDidMount() {
    this.ajaxFun();
  }
  ajaxFun() {
    // axios.get('http://localhost:4000/arr').then((data) => {
    //   this.setState({
    //     arr: data.data
    //   })
    // });
    axios.get('/api/101320101.html').then((data) => {
      // this.setState({
      //   arr: data.data
      // })
    });
  }
  render() {
    return (
      <div>
        JsonServer
        {this.state.arr.map((val, key) => {
          return <p key={key}>{val.id}---{val.name}</p>
        })}

      </div>
    );
  }
}

export default JsonServer;