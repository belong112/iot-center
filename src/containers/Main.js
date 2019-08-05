import React, { Component } from 'react';
import Home from "./Home.js"
import Contact from "./Contact.js"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;