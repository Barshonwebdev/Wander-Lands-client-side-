import React from 'react';
import './HomepageSingleService.css'
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const HomepageSingleService = (props) => {
    const{ _id,Name,Price ,image, Description}= props.service;
    const HomepageServiceStyle={border: '3px solid grey', padding:'10px', borderRadius: "10px"}
    return (
        <div style={HomepageServiceStyle}>
            <img src={image} alt=""/>
            <h3>Package Name: {Name}</h3>
            <h3>Description: {Description}</h3>
            <h3>Price: {Price}</h3>
            <Button className="btn-div" variant="success" ><NavLink className="btn" to={`/home/${_id}`}>Book Package</NavLink> </Button>
        </div>
    );
};

export default HomepageSingleService;