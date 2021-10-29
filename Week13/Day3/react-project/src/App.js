import Contacts from "./components/contacts/Contact";
import Navbar from "./components/Navbar";
import store from "./Store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
