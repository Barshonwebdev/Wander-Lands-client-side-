import React from 'react';
import './NotFound.css';
import sorryImage from '../../Images/notfound.png'

const NotFound = () => {
    return (
        <div>
        <div className='not-found-section'>
            <h1 className='not-found'>404!! Page Not Found</h1>
            <p>Make sure you are searching the correct page. Thank you!</p>
        </div>
        <img className="sorry" src={sorryImage} alt=""/>
        </div>
            
        
    );
};

export default NotFound;<h1>404!! Not Found!</h1>