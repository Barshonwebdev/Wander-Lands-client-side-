import React from 'react';
import HomepageServices from '../HomepageServices/HomepageServices';
import Stats from '../Stats/Stats';
import './Home.css';
import myImage from '../../Images/banner.jpg'
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div>
            <h1 className="welcoming " >Wander the lands you always dreamed of...</h1>
            <img className="cover" src={myImage} alt=""/>
            <h3 className="welcoming">In these busy days, give yourself a break and give us a chance to arrange for you memorable tours so that you can wander your dreamy lands of our beautiful country.</h3>
            <HomepageServices></HomepageServices>
            <Stats></Stats>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;