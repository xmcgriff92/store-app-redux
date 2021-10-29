import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../Store';
import { ContactsContainer, FormContainer } from '../Website.Style';
import shortid from 'shortid';

export default function AddContact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const createContact = (e) => {
        e.preventDefault();
       const newContact = {

           id: shortid.generate(),
           name: name,
           phone: phone,
           email: email
       }
       dispatch(addContact(newContact))
    }

    return (
        <ContactsContainer>
           <div className="card border-0 shadow">
               <div className="card-header">Add a contact</div>
               <div className="card-body">

                    <form onSubmit={(e) => createContact(e)}>
                        <FormContainer className="form-group">
                            <input className="form-control" type="text"
                            value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name"/>
                        </FormContainer>

                        <FormContainer className="form-group">
                            <input className="form-control" type="text" 
                            value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="enter your phone-number"/>
                        </FormContainer>

                        <FormContainer className="form-group">
                            <input className="form-control" type="text" 
                            value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email"/>
                        </FormContainer>

                        <button className="btn btn-primary" type="submit">Add Contact</button>
                    </form>

               </div>
           </div>
        </ContactsContainer>
    )
}
