import Navbarrr from "./components/Navbarrr";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Basket from "./components/Basket";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import { Provider } from "react-redux";
import Carouselll from "./components/Carouselll";
import Footer from "./components/Footer";



function App() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Navbarrr />
            <Switch>
            
              <Route exact path="/" component={Products} />
              <Route exact path="/about" component={About} />
              <Route exact path="/basket" component={Basket} />
            </Switch>
            <Footer/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
