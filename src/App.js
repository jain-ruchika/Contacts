import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import Home from "./containers/Home/Home";
import Check from './containers/Check/Check'
import { Route} from 'react-router';
import Aux from "./hoc/Auxi";
import Videos from "./containers/Videos/Videos";
import store from './store/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Aux>
        <Route exact path={"/"} component={Home}></Route>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/check"} component={Check}></Route>
        <Route path={"/videos"} component={Videos}></Route>
        </Aux>
        </Provider>
    );
  }
}

export default App;
