import React from "react";
import { render } from "react-dom";

class App extends React.component {
  render() {
    return (
      <div>
        <h1> Hellow!</h1>
      </div>
    );
  }
}

// call the render method,
// 1st what to render, the initiall app,
//  2nd arg, where to render it
render(<App />, window.document.getElementById("app"));
