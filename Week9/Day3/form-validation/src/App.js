import { useState } from 'react';


// useState is a hook
//state = {
// counter: 0
// username: ""
// pokemon: [{}]
// }

function App() {
// state = { counter: 0 }
// this.state.coounter
// incrementCounter() {
//  this.setState({counter: this.state.counter++})
// }

// decrementCounter() {
 // this.setState({counter: this.state.counter--})
// }

// hook
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState("");

  return (
    <div className="App">

     <h1>Form Validation</h1>

      <p>User is {userName}</p>
      <input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Type username here"/>

      <div>
        <p>Counter is : {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      </div>

      <form>
        <input type="text"/>
        <input type="text"/>
        <input type="button" value="send"/>
      </form> */
      <Form/>
    </div>
    
  );
}

export default App;
