import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className='header-part'>          
                <h1 className='title'>Wander Lands <span className="bd">BD</span></h1>
                <div>
                <Navigation></Navigation> 
                </div>
            </header>
        </div>
    );
};

export default Header;