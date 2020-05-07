import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import SingleQuote from "./components/SingleQuote";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Hello from create react app</h1>
      <Quotes />

      {/* the lorem text is a child, and the span is a child of the SingleQuote component */}
      {/* <SingleQuote
        propFromParent="Hello, my child."
        someOtherProp="some other props value"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        recusandae quam impedit provident vel repellendus magnam explicabo amet
        corrupti voluptatem exercitationem dolor minus assumenda. Expedita ullam
        assumenda laboriosam voluptate veniam.{" "}
        <span>How could you forget about me? I'm your child too!</span>
      </SingleQuote> */}
      {/* <Counter propFromParent="here is your prop, my child" /> */}
    </div>
  );
}

export default App;
