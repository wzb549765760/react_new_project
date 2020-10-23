import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from "react-router-dom"

import Homea from "../Home/Homea"
import Homeb from "../Home/Homeb"

export default class Home extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        home
        <NavLink to="/HomeRouter/homea">homea</NavLink>
        <NavLink to="/HomeRouter/homeb">homeb</NavLink>
        <Switch>
          <Route path="/HomeRouter/homea" component={Homea}></Route>
          <Route path="/HomeRouter/homeb" component={Homeb}></Route>
          <Redirect from="/HomeRouter" exact to="/HomeRouter/homea">
          </Redirect>
        </Switch>

      </div>
    )
  }
}
