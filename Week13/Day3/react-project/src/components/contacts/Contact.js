import React from "react";
import { useSelector } from "react-redux";
import { ContactsContainer } from "../Website.Style";
import { Contacts } from "./Contacts";

export default function Contact() {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  return (
    <ContactsContainer>
      <table class="table shadow">
        <thead>
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox"></div>
              <input type="checkbox" className="custom-control-input" />
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <Contacts contact={contact}/>
            );
          })}
        </tbody>
      </table>
    </ContactsContainer>
  );
}
