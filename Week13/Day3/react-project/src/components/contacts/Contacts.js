import React from "react";
import { useSelector } from "react-redux";
import { ContactsContainer } from "../Website.Style";

export default function Contacts() {
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
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <th scope="row">{contact.id}</th>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContactsContainer>
  );
}
