import React from 'react'

export const Contacts = (props) => {
    return (
        <tr>
        <th scope="col">
          <div className="custom-control custom-checkbox"></div>
          <input type="checkbox" className="custom-control-input" />
        </th>
        <th scope="row">{props.contact.id}</th>
        <td>{props.contact.name}</td>
        <td>{props.contact.phone}</td>
        <td>{props.contact.email}</td>
      </tr>
    )
}

