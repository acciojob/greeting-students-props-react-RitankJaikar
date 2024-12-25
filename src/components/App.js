import React, { useState } from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  // You can set the name dynamically or statically
  const [name, setName] = useState("John");

  return (
    <Welcome name="" />
  )
}


export default App;
