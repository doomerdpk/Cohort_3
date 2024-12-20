//Use Case: Test Routing and Layouts in React
//Layout of the website: Header at Top, Content in Betwwen, Footer at bottom
//Routes:
//1. /page1/title
//2. /page/body
//3. /page/pageNo
//Implement navigation to the home(welcome) page from the every route
// Use array of Routes

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

const routes = [
  {
    path: "page/title",
    element: <Title />,
  },
  {
    path: "page/body",
    element: <Body />,
  },
  {
    path: "page/pageNo",
    element: <PageNo />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

const routeComponent = routes.map((route) => (
  <Route path={route.path} element={route.element}></Route>
));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />}></Route>
          {routeComponent}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      {/* Header Part */}
      <Link to="/page/title">Title of the Page</Link>
      <br />
      <Link to="/page/body">Body of the Page</Link>
      <br />
      <Link to="/page/pageNo">Page No.</Link>
      <br />
      <br />
      {/* Main Content */}
      <Outlet />
      {/* Footer Part */}
      Contact us | Email | Phone
    </>
  );
}

function Welcome() {
  return <div>Welcome to Pager</div>;
}

function Title() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }
  return (
    <div>
      Two ways to Success!
      <br />
      <button onClick={NavigateToHome}>Navigate to Home Page</button>
    </div>
  );
}

function Body() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }
  return (
    <div>
      You have to choose one of the ways to succeed in your life!
      <br />
      <button onClick={NavigateToHome}>Navigate to Home Page</button>
    </div>
  );
}

function PageNo() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }
  return (
    <div>
      1<br />
      <button onClick={NavigateToHome}>Navigate to Home Page</button>
    </div>
  );
}

function Error() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }
  return (
    <div>
      Sorry, No Content Found!
      <br />
      <button onClick={NavigateToHome}>Navigate to Home Page</button>
    </div>
  );
}
export default App;
