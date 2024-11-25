//Use Case: Custom Hooks in React
//Only Components (Nomral Case) and a Hook(Custom Hook) can contain another hook inside it.
//Do not use hooks inside a normal function.
//any hook either inbulit or custom should start with use in react.
//1. useCounter()
//2. useFetch() - use to fetch data from the beckend
//3. usePrev() - used to get the previous value of the state varibale
//4. useIsOnline() - TO check if the browser has a network connection or not?
//5. useDebounce() - Delaying mutiple backend request and send once
import { useDebounce } from "./Hooks/useDebounce";

function App() {
  function SendRequest() {
    fetch("https://api.deepak.com");
  }

  const deBouncedFn = useDebounce(SendRequest);

  return (
    <>
      <input type="text" onChange={deBouncedFn} />
    </>
  );
}

export default App;
