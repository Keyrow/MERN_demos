import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import FancyParagraph from "./components/FancyParagraph";
import RandomNumbers from "./components/RandomNumbers";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Product />

      {/* <h1>Hello from create react app</h1>

      <Counter btnText={"Counter has been clicked: "} />
      <FancyParagraph hello="world" propFromParent="Hello my child">
        My Fancy Paragraph
      </FancyParagraph>

      <RandomNumbers title="Pseudo-random Numbers" subTitle="Sub Title" /> */}
    </div>
  );
}

export default App;
