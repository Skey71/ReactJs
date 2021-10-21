import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, AppWitoutJSX } from "./App";

const myName = "test";
const myChildren = "123123123123";
const myFoo = (item) => {
  console.log(item);
};

// {
//   id: 12
// }
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <>
    <div className="App">
      <App
        test="123"
        id={() => { }}
        test2={[1, 2, 3]}
        test3={{}}
        name={myName}
        myFoo={myFoo}
        component={<div>test component</div>}
      >
    {myChildren}
      <App>
      </App>

      <hr />
      <AppWitoutJSX name={myName}>{myChildren}</AppWitoutJSX>
    </div>
  </>,

  document.getElementById("root")
);


