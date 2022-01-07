import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import HomepageSingleService from '../HomepageSingleService/HomepageSingleService';
import "./HomepageServices.css"

const HomepageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://arcane-hamlet-80803.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data)); 
    },[])
    return (
        <div>
            <h1 className="homeservice-title"> Packages</h1>
            <h4 className="text-success">Our Packages are less costly, reliable and full of advantages! Be sure to check them out!</h4>
            <div className="homepage-service-container">
            {  services.length===0 ? <Spinner animation="border" variant="success" />
            
            :
            <Row sm={1} md={2} className= "g-4 " > 
               {services.map(service=><HomepageSingleService key={service._id} service={service}></HomepageSingleService>) }

               </Row>

            }
            </div>
        </div>
    );
};

export default HomepageServices;