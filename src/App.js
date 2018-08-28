import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Contacts } from "./containers/Contacts/Contacts";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Contacts />
          hello
        </Layout>
      </div>
    );
  }
}

export default App;
