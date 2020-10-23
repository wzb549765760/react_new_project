import React from 'react';
import './App.css';
import Home from './components/Home.js'
import ReduxHome from './components/ReduxHome'
import News from './components/News.js'
import Brother from './components/Brother.js'
import JSonServer from './components/JsonServer.js'

import { Route, Link, NavLink, Switch, Redirect, withRouter } from "react-router-dom"
import HomeRouter from './components/router/HomeRouter.js'
import UserRouter from './components/router/UserRouter.js'
import HookDemo from "./components/HookDemo"


// rcc 快速创建组件
// rccp 快速创建组件 加props验证
function App(props) {
  console.log(props);
  // withRouter() 高阶组件（HOC 参数是一个组件 同时返回的也是一个组件 这类组件我们称为高阶组件）就是让不是路由切换的组件也具有路由切换组件的三个属性 （location match history）；
  // 作用  1. 监控路由变化 使用的是history.listen((link)=>{
  // link.pathname
  // });
  // 2.路由传参 （params进行传参  
  // 1需要在路由规则中设置传递的接受参数 :xxx 
  // 2.发送参数 直接在跳转路径后进行编写 
  // 3.接受 props.match.params.参数名
  // 优点 属性地址参数还存在 缺点 只能传递字符串  并且参数多的时候url 很长
  // ）
  // （query  1.不需要在路由规则中进行传递参数的配置   2.直接发送数据  3.使用this.props.location.query.xxx获取）

  props.history.listen((link) => {
    console.log(link)
  })
  return (
    <div className="App">
      ReduxHome<ReduxHome /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        <NavLink to="/HomeRouter/123123">HomeRouter</NavLink>
        ---
        <NavLink to={{ pathname: "/UserRouter", query: { name: "wuzhibin" } }}>UserRouter</NavLink>
        ---
        <NavLink to="/HookDemo">HookDemo</NavLink>
        <br></br>
        <button onClick={() => {
          props.history.push("/HomeRouter")
        }}>withRouter点我调整HomeRouter</button>
        <button onClick={() => {
          props.history.push({ pathname: "/UserRouter", query: { name: "wuzhibin" } })
        }}>withRouter点我调整UserRouter</button>
      </div>
      <Switch>
        {/* <Route path="/" exact component={HomeRouter}></Route> */}
        <Route path="/HomeRouter/:id" component={HomeRouter}></Route>
        <Route path="/UserRouter" component={UserRouter}></Route>
        <Route path="/UserRouter" component={UserRouter}></Route>
        <Route path="/HookDemo" component={HookDemo}></Route>
        <Redirect from="/" exact to="/UserRouter"></Redirect>
      </Switch>
      <h1>-----------</h1>
      <Home />
      <h1>-----------</h1>
      <News test="hello" fufun={(text) => {
        console.log(text)
      }} />
      <h1>兄弟间传值  使用pubsub.js
        <br></br>
        npm install pubsub-js --save</h1>
      <Brother />
      <br></br>
      <h1>-----------</h1>

      <JSonServer />

      <h1>
        react 解决跨越<br></br>
        1正向代理--开发环境--一个位于客户端和目标服务器直接的代理服务器 为了获取目标服务器的内容 客户端向代理服务器发送一个请求 代理服务器帮助我们去目标服务器里面获取数据并且返回给我们
        <br></br>2反向代理--上线环境--可以通过代理服务器来介绍网络上的请求连接 然后将这个请求装发给内部的网络服务器 并且把这个服务器上的得到的数据返回到请求的客户端  这个时候代理服务器对外的表现就是一个反向代理
        <br></br>找到文件 F:\React\react_cli_new_project\node_modules\react-scripts\config\webpackDevServer.config.js
        <br></br>修改proxy为
        <br></br>proxy:{
          // "/api":{
          // target:"http://www.weather.com.cn/data/cityinfo/101320101.html",
          //   changeOrigin:true,
          //   "pathRewrite":{
          // "^api":"/"
          //   }
          // }
        }
        <br></br> 模拟请求真实的网络接口 中国天气网的数据

      </h1>
      <h1>路由</h1>
      <br></br>路由--根据URL的不同来切换对于的组件  来时spa（单页面引用） 在页面切换的时候不会刷新 更加接近原生体验
      <br></br>下周路由  npm install --save react-router-dom
      <br></br>react-router 只提供一些核心的api
      <br></br>react-router-dom 更多的一些选项
      <br></br>路由模式
      <br></br>hash --- HashRouter（hash模式 带#  刷新的时候页面不会丢失）
      <br></br>brower -- BrowerRouter（历史记录模式  没有# 他是通过历史记录api来进行路由切换 刷新会丢失 本地模式不会）
      <br></br>1.下周
      <br></br>2.index.js 引用
      <br></br>3.路由包裹根组件{/* <HashRouter>
        <App />
      </HashRouter> */}
      <br></br>4.引用
      {/* import { Route } from "react-router-dom" */}
      <br></br>5.配置 route
      <br></br>6.路由导航  Link to="" NavLink 高亮设置
      <br></br>exact 精准匹配  switch 防止多次渲染

      // withRouter() 高阶组件（HOC 参数是一个组件 同时返回的也是一个组件 这类组件我们称为高阶组件）就是让不是路由切换的组件也具有路由切换组件的三个属性 （location match history）；
  // 作用  1. 监控路由变化 使用的是history.listen((link)=>{
        // link.pathname
      });
      {/*   // props.history.listen((link) => {
    //   console.log(link)
    // }) */}
    // <br></br>编程式导航

      <h1>---------</h1>
      <br></br>Hook 是react中16.7新增的一个特效 主要是用来让无状态组件 可以使用状态 在react开发中状态的管理是必不可少的 以前为了进行状态管理 需要用类组件或者redux等来管理
      <h1>---------</h1>
      <br></br>redux 是JavaScript提供的一个可预测性（我们给一个固定的输入 那么必定可以得到一个结果）的状态容器
      <br></br>集中的福安里react中多个组件的状态
      <br></br>redux 是一个周末的状态管理库  （在vue中也可以使用  但是在react中会比较多）
      <br></br>需求场景
      <br></br>某个组件的状态需要共享的时候
      <br></br>一个组件需要改变另一个组件状态的时候
      <br></br>组件中的状态需要任何地方都可以拿到
      <br></br>三大原则
      <br></br>1.单一数据源  整个react中的状态都会被统一的管理到store
      <br></br>2.state是只读的 我们不能够直接改变state 而是需要出发redux中的特定方法来进行修改
      <br></br>3.使用纯函数来执行操作  action来改变redux中的state
      <br></br>下载  npm install --save redux
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div >

  );
}

export default withRouter(App);
