import { useState } from 'react';
import Signup from './components/Signup';
import DB from './components/DB';
import './components/App.css'

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
  const [userInfo, setuserInfo] = useState([])
  

  const submitButton = () => {
    setuserInfo([...userInfo, firstName + " " + lastName, dob, address, city + " " + state + " " + zipcode, username, email])
  }

  return (

    <div className="App-container">
      <div className="sign-up">
        <Signup submitButton={submitButton} firstName ={setfirstName}
        lastName ={setlastName} dob ={setdob}  address ={setaddress}
        city ={setcity} state ={setstate} zipcode={setzipcode}
        username ={setusername} email ={setemail} />
      </div>

      <div className="data">
        <DB userInfo={userInfo} />
      </div>

    </div>
  );
}

export default App;
