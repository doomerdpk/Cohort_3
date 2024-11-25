//Use Case: Implement Lazy Loading in React
//Lazy loading in React refers to the technique of loading components only when they are needed,
// instead of loading all components upfront. This can improve the performance of a React application by
// reducing the initial load time. React provides React.lazy() to help implement lazy loading,
// which dynamically imports a component only when it's rendered.
// 1.Using React.lazy(): You wrap the component that should be lazily loaded with React.lazy(). It allows you to
// import the component only when it's needed.
// 2.Suspense for fallback: Since the component might take time to load, you wrap the lazy-loaded component in
// a Suspense component and specify a fallback (like a loading spinner) to display while waiting for the
// component to load.

import React, { Suspense, lazy } from "react";
// Lazily load the component
const MyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <div>
      <h1>Welcome to Lazy Loading!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
