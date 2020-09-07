// ES Modules... basically the modern `require()` function
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// mock-data

// if you want to use javascript within JSX you need to write it within the curly braces {}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
