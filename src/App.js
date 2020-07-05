// Approach 1
import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {component: null}; 
  }


  renderComponent = () => {
    if (window.location.href.indexOf("/contact") >= 0) {
      import(/* webpackChunkName: "Contact" */"./Contact").then((mod) => {
        this.setState(() => ({
          component: mod.default,
        }));
      });
    } else if (window.location.href.indexOf("/stuff") >= 0) {
      import(/* webpackChunkName: "Stuff" */"./Stuff").then((mod) => {
        this.setState(() => ({
          component: mod.default,
        }));
      });
    } else if (window.location.href.indexOf("/home") >= 0) {
      import(/* webpackChunkName: "Home" */"./Home").then((mod) => {
        this.setState(() => ({
          component: mod.default,
        }));
      });
    } else {
      import(/* webpackChunkName: "Home" */"./Home").then((mod) => {
        this.setState(() => ({
          component: mod.default,
        }));
      });
    }
  };

  componentDidMount() {
    this.renderComponent();
  }
  render() {
    const { component: DynamicComponent } = this.state;

    return (
      <>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <a exact href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/stuff">Stuff</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div>Testing Code Splitting or Lazy loading of components</div>
        <br></br>
        {DynamicComponent !== null && (
          <DynamicComponent />
        )}
      </>
    );
  }
}

export default App;