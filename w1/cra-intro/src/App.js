import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import FancyParagraph from "./components/FancyParagraph";
import RandomNumbers from "./components/RandomNumbers";

function App() {
  return (
    <div>
      <h1>Hello from create react app</h1>

      <Counter btnText={"Counter has been clicked: "} />
      <FancyParagraph hello="world" propFromParent="Hello my child">
        Test
      </FancyParagraph>

      <RandomNumbers />
    </div>
  );
}

export default App;
