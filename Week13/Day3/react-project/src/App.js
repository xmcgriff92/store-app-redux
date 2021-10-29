import Contacts from "./components/contacts/Contact";
import Navbar from "./components/Navbar";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/addcontact" component={AddContact} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
