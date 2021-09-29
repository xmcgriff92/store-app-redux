import { useState } from "react";

function Signup(props) {
    return(
        <div>
            <h1>Signup Sheet</h1>
            <form>

                <input onChange={(e) => props.firstName({firstName: e.target.value})} type="text" placeholder="first name"/>
                <input onChange={(e)=> props.lastName({lastName: e.target.value})} type="text" placeholder="last name"/>
                <input onChange={(e)=> props.dob({dob: e.target.value})} type="date" placeholder="date of birth"/>
                <input onChange={(e)=> props.address({address: e.target.value})} type="text"  placeholder="Address"/>
                <input onChange={(e)=> props.city({city: e.target.value})} type="text"  placeholder="City"/>
                <input onChange={(e)=> props.state({state: e.target.value})} type="text"  placeholder="State"/>
                <input onChange={(e)=> props.zipcode({zipcode: e.target.value})} type="text"  placeholder="Zipcode"/>
                <input onChange={(e)=> props.username({username: e.target.value})} type="text" placeholder="Username"/>
                <input onChange={(e)=> props.email({email: e.target.value})} type="text"  placeholder="Email"/>
                <button >Signup</button>

            </form>

        </div>
    );

}

export default Signup;