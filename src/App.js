import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Contacts } from "./containers/Contacts/Contacts";
import ReactDOM from 'react-dom';
import Home from "./containers/Home/Home";
import Check from './containers/Check/Check'
import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import Aux from "./hoc/Auxi";
import Videos from "./containers/Videos/Videos";
class App extends Component {
  render() {
    return (
        <Aux>
        <Route exact path={"/"} component={Home}></Route>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/check"} component={Check}></Route>
        <Route path={"/videos"} component={Videos}></Route>
        </Aux>
    );
  }
}

export default App;
