import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/form">Form</Link>
            <Link to="/account">Account</Link> 
            <Link to="/garage">Garage</Link>        
        </div>
    );
}