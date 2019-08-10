import React, { Component } from 'react';
import Home from "./Home.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Member from "./Member.js"
import News from "./News.js"
import Research from "./Research"
import Researchdetail from "./Researchdetail"
import Lab from "./Lab"
import Labdetail from "./Labdetail"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/lab" component={Lab} />
          <Route path="/lab/:id" component={Labdetail} />
          <Route exact path="/research" component={Research} />
          <Route path="/research/:id" component={Researchdetail} />
          <Route path="/news" component={News} />
          <Route path="/member" component={Member} />
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