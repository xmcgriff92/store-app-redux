import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ItemDescription from "./components/ItemDescription";
import ItemListing from "./components/ItemListing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={ItemListing} />
          <Route exact path="/itemdescription" component={ItemDescription} />
          <Route>404 Not Found</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
