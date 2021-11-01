import React from 'react';
import './About.css';
import aboutImage from '../../Images/sea.jpg'

const About = () => {
    return (
        <div className='about-section '>
            <div>
                 <img className="about-image" src={aboutImage} alt=""/>  
            </div>
                <div>
                <h1 className="about-title">About "Wander Lands"</h1>
                <h3>
                    "Wander Lands" is the platform we created to make you, a tour lover, love wandering all the more. Our mission is to make people know and visit more places of our beautiful country than ever before.  We have: <br/> <br/> 1. More than 17 packages. <br/><br/> 2. Over 6 major tour spots covered, <br/> <br/> 3. Professional tour guides. <br/> <br/> And many more features coming along the way... </h3>
                </div>
                </div>
           
    );
};

export default About;