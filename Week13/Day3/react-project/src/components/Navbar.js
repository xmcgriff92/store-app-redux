import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a class="navbar-brand" href="#">
            Contacts
          </a>

          <div>
            <a className="btn btn-light ml-auto">Create Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
