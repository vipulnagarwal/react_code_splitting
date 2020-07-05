import React, { Component, Suspense } from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

const Home = React.lazy(() => import('./Home'));
const Stuff = React.lazy(() => import('./Stuff'));
const Contact = React.lazy(() => import('./Contact'));


function Main() {
  return (
    <Router>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Suspense fallback={<div>Loading components ...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default Main;
