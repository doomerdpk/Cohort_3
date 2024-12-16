// Use case: Implement Asynchronous DataQueries
//Method 1(Ugly Way): Using UseEffect
//Method 2(Optimal Way): Using Selectors

import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { linkedinAtom } from "./atom-async";

function App() {
  return (
    <>
      <RecoilRoot>
        <TopBar />
      </RecoilRoot>
    </>
  );
}

function TopBar() {
  const topbar = useRecoilValue(linkedinAtom);

  return (
    <div>
      <button>Home</button>
      <button>My Network({topbar.network})</button>
      <button>Jobs({topbar.jobs})</button>
      <button>Messaging({topbar.messages})</button>
      <button>Notifications({topbar.notifications})</button>
      <button>Me()</button>
    </div>
  );
}

export default App;
