import React from 'react';
import { Link } from 'react-router-dom';
import './styled-components/Sidebar.css'

export default function Sidebar() {
    return(
        <div className="sidebar-container">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/form">Form</Link>
            <Link to="/account">Account</Link> 
            <Link to="/garage">Garage</Link>        
        </div>
    );
}