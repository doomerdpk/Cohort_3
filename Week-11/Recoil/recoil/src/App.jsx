//Use Case: Optimizing Re-Rendering using Selectors

import { useState, createContext, useContext } from "react";
import {
  RecoilRoot,
  atom,
  useRecoilValue,
  useSetRecoilState,
  selector,
} from "recoil";

//Global Atom Variable to maintain the state
const counter = atom({
  key: "counter",
  default: 0,
});

//Selector to change only when the count is even
const even = selector({
  key: "isEven",
  get: ({ get }) => {
    const count = get(counter);
    return count % 2;
  },
});

function App() {
  return (
    //Wrapped under RecoilRoot
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}

function Counter() {
  return (
    <div>
      <Count />
      <br />
      <IncreaseCount />
      <br />
      <DecreaseCount />
      <br />
      <IsEven />
    </div>
  );
}

function Count() {
  //Used "useRecoilValue" function to get the value of the state variable.
  const count = useRecoilValue(counter);
  return <div>{count}</div>;
}

function IncreaseCount() {
  //Used "useRecoilState" function to get the updater function
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 2)}>IncreaseCount</button>
    </div>
  );
}

function DecreaseCount() {
  //Used "useRecoilState" function to get the updater function
  const setCount = useSetRecoilState(counter);
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>DecreaseCount</button>
    </div>
  );
}

function IsEven() {
  const iseven = useRecoilValue(even);
  return <div>{iseven == 0 ? "Even Count" : "Odd Count"}</div>;
}

export default App;
