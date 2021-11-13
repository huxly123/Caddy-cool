import React from "react";
import "./App.css";
import Loading from "./components/loading";
import { useState, useEffect } from "react";
import Signin from "./components/Signin.jsx";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 6000);
  }, []);

  return <div className="LinkApp">{loading ? <Loading /> : <Signin />}</div>;
}

export default App;
