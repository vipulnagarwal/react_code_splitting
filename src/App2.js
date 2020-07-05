// Approach 2 using React lazy and Suspense
import React, { Component,Suspense } from "react";
import "./App.css";

class App extends Component {

  renderComponent = () => {
    let OtherComponent = null;
    if (window.location.href.indexOf("/contact") >= 0) {
      OtherComponent = React.lazy(() => import(/* webpackChunkName: "Contact" */"./Contact"));
    } else if (window.location.href.indexOf("/stuff") >= 0) {
      OtherComponent = React.lazy(() => import(/* webpackChunkName: "Stuff" */"./Stuff"));
    } else if (window.location.href.indexOf("/home") >= 0) {
      OtherComponent = React.lazy(() => import(/* webpackChunkName: "Home" */"./Home"));
    } else {
      OtherComponent = React.lazy(() => import(/* webpackChunkName: "Home" */"./Home"));
    }
    return OtherComponent;
  };

  render() {
    const DynamicComponent = this.renderComponent();

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
        <Suspense fallback={<div>Loading components ...</div>}>
        {DynamicComponent !== null && (
           <DynamicComponent />
         )}
        </Suspense>
      </>
    );
  }
}

export default App;