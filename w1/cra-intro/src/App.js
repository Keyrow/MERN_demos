import React from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello from create react app</h1>
      {/* <button
        onClick={(event) => {
          console.log("clicked!");
        }}
      >
        Click Me!
      </button> */}

      <Counter />
      <Counter />
    </div>
  );
}

export default App;
