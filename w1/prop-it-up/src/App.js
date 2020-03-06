import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div id="main-container">
      <PersonCard
        firstName="Neil"
        lastName="Mos"
        age={31}
        hairColor="Brown"
        hobbies={["memes", "wearing bread gloves"]}
      />
      <PersonCard
        firstName="Linh"
        lastName="Le"
        age={37}
        hairColor="Black"
        hobbies={["ageing very quickly", "drink green stuff"]}
      />
    </div>
  );
}

export default App;
