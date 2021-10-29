import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a class="navbar-brand" href="#">
            Contacts
          </a>

          <div>
            <Link to="/addcontact" className="btn btn-light ml-auto">Create Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
