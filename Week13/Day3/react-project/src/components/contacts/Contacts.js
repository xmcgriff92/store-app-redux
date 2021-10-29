import React from 'react'

export const Contacts = (props) => {
const contact = props.contact;
    return (
        <tr>
        <th scope="col">
          <div className="custom-control custom-checkbox"></div>
          <input type="checkbox" className="custom-control-input" />
        </th>
        <th scope="row">{contact.id}</th>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
      </tr>
    )
}

