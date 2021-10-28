import Items from "./components/Items";
import Navbar from "./components/Navbar";
import AddItems from "./components/AddItems";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/additems" component={AddItems} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
