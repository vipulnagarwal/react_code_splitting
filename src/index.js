import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
//import Main from "./Main";
import * as serviceWorker from './serviceWorker';

// component chunking Approach 1 using dynamic import() and state; 
// without using React.lazy and Suspense for older react applications
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// component chunking Approach 2 using React.lazy and Suspense
// ReactDOM.render(
//   <App2/>,
//   document.getElementById('root')
// );


// Route level chunking Approach 1 using BrowserRouter, React.lazy and Suspense
// ReactDOM.render(
//   <Main/>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
