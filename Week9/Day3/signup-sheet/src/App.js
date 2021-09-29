import { useState } from 'react';
import Signup from './components/Signup';
import DB from './components/DB';

function App() {

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [dob, setdob] = useState("")
  const [address, setaddress] = useState("")
  const [city, setcity] = useState("")
  const [state, setstate] = useState("")
  const [zipcode, setzipcode] = useState("")
  const [username , setusername ] = useState("")
  const [email , setemail ] = useState("")
  

 
  
  return (

    <div className="App">

      <Signup firstName ={setfirstName}
      lastName ={setlastName} dob ={setdob}  address ={setaddress}
      city ={setcity} state ={setstate} zipcode={setzipcode}
      username ={setusername} email ={setemail}/>
      <DB />
     
    </div>
  );
}

export default App;
