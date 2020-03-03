import React from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Hello from create react app</h1>

      <Counter btnText={"Counter has been clicked: "} />
    </div>
  );
}

export default App;
