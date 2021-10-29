import React from "react";
import Avatar from "react-avatar";
import { BsTrashFill, BsPencilFill } from "react-icons/bs";

export const Contacts = (props) => {
  const contact = props.contact;
  return (
    <tr>
      <th scope="col">
        <div className="custom-control custom-checkbox"></div>
        <input type="checkbox" className="custom-control-input" />
      </th>
      <th scope="row">{contact.id}</th>
      <td>
        <Avatar className="" name={contact.name}
         size="45" round={true} />
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td><a href="#">
          <span className=""><BsPencilFill/></span></a>
          <a href="#">
          <span><BsTrashFill/></span></a>
          </td>
            
         
    </tr>
  );
};
