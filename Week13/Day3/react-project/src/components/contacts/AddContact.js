import React, { useState } from 'react'
import { ContactsContainer, FormContainer } from '../Website.Style'

export default function AddContact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <ContactsContainer>
           <div className="card border-0 shadow">
               <div className="card-header">Add a contact</div>
               <div className="card-body">

                    <form>
                        <FormContainer className="form-group">
                            <input className="form-control" type="text" placeholder="enter your name"/>
                        </FormContainer>

                        <FormContainer className="form-group">
                            <input className="form-control" type="text" placeholder="enter your phone-number"/>
                        </FormContainer>

                        <FormContainer className="form-group">
                            <input className="form-control" type="text" placeholder="enter your email"/>
                        </FormContainer>

                        <button className="btn btn-primary" type="submit">Add Contact</button>
                    </form>

               </div>
           </div>
        </ContactsContainer>
    )
}
