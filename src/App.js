import React, { useState, useEffect } from "react";
import "./styles.css";
import Counter from "./Counter";
import Footer from "./footer";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [count2, setCount2] = useState(false);

  useEffect(() => {
    setCount2(!count2)
    console.log("changed : "+count2);
  },[showCounter]);

  return (
    <div className="App">
      <h1> Our App</h1>
      <h2>{count2? "unmounted" : "mounted"}</h2>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter&&<Counter/>}
      <br></br>
      <Footer/>
    </div>
  );
}
