import Form from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Account from "./Account";
import Garage from "./components/Garage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";


function App() {
  const [viewSideBar, setviewSidebar] = useState(true);
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1></h1>
          <Header viewSideBar={viewSideBar} setviewSidebar={setviewSidebar} />
          <div className="">
            <Sidebar />
            <Route path="/form">
              <Form />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/garage">
              <Garage />
            </Route>
            <Route path="*">
              <Redirect to="/errorpage" />
            </Route>
            <Route path="/errorpage">
              <ErrorPage />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
