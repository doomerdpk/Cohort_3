//Use Case: Want to create a stopwatch with start and stop functionality

import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  //const [timer, setTimer] = useState(0);
  //Here keeping timer as state variable will trigger one extra re-render
  //whenever you start the clock.
  //let timer = 0; Timer got re-intialized to 0 for every re-render. rarely
  //we use normal variables like this in react

  const timerRef = useRef(); //This will trigger one less re-render then
  //keeping timer as state variable.

  function startClock() {
    const value = setInterval(function () {
      setCount((c) => c + 1);
    }, 1000);
    timerRef.current = value;
  }
  function stopClock() {
    clearInterval(timerRef.current);
  }
  return (
    <div>
      {count}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default App;
