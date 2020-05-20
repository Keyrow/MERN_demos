import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import "./App.css";

// outside component so it only runs one time when react imports this file
const socket = io(":8000");

function App() {
  // const [socket] = useState(() => {
  //   io(":8000");
  // });

  return <div className="App"></div>;
}

export default App;
