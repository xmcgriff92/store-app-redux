import React from "react";
import Neighborhood from './components/Neighborhood/Neighborhood';
import Dealership from "./components/Dealership/Dealership";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Props Drilling</h1>
      <Neighborhood />
      <Dealership />
    </div>
  );
}

export default App;
