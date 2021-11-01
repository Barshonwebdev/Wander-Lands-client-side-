import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Navigation.css'

const Navigation = () => {

    const {user, logout}= useFirebase();
    return (
        <div className='nav-items'>
            <NavLink className='links' to= "/home" activeStyle={{color : "teal", textDecoration: 'underline'}} >Home</NavLink>
            <NavLink className='links' to= "/about" activeStyle={{color : "teal", textDecoration: 'underline'}}>About</NavLink>
            {user.email && <NavLink className='links' to= "/myOrder"activeStyle={{color : "teal", textDecoration: 'underline'}}>My Bookings</NavLink>}
            {user.email && <NavLink className='links' to= "/allOrders"activeStyle={{color : "teal", textDecoration: 'underline'}}>All Bookings</NavLink>}
            {user.email && <NavLink className='links' to= "/addService"activeStyle={{color : "teal", textDecoration: 'underline'}}>Add new package</NavLink>}
            
            {!user.email && 
            <NavLink className="nav-button"  to= "/login" activeStyle={{color : "teal", textDecoration: 'underline'}}><button className="nav-button-div btn-success">Login </button></NavLink>
             }
            <span className="name"> {user.displayName} </span>
            {user.email && <button  onClick={logout} className="nav-button-div btn-success"> Log Out
            </button> }
        </div>
    );
};

export default Navigation;