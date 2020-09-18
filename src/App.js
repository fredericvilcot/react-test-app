import React, { useState } from "react";
import { CounterFunction } from "./counterFunction";
import CounterClass from "./counterClass";
import "./App.css";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-header-title">Test React</h1>
        <span className="app-header-label">Waouhhhh what cuty counters !</span>
      </div>
      <div className="app-inputs-container">
        <label>
          Choose a maximum number for this counter :
          <input
            id="counter-max-prop"
            className="app-input"
            onChange={(event) => setMax(Number(event.target.value))}
          />
        </label>
        <label>
          Choose a minimum number for this counter :
          <input
            id="counter-min-prop"
            className="app-input"
            onChange={(event) => setMin(Number(event.target.value))}
          />
        </label>
      </div>
      <div style={{ marginTop: "80px" }}>
        <CounterFunction maxCount={max} minCount={min} />
        <CounterClass maxCount={max} minCount={min} />
      </div>
    </div>
  );
}

export default App;
