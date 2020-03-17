import React, { useState } from "react";
import "./App.css";

import io from "socket.io-client";

function App() {
  // initial state is the returned socket from io func
  const [socket] = useState(() => io(":8000"));

  return <div></div>;
}

export default App;
