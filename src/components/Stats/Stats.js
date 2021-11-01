import React from 'react';
import './Stats.css'
import {Card, CardGroup} from 'react-bootstrap'

const Stats = () => {
    return (
        <div className="stats">
            <h1 className="stats-title"> Proof that people love this platform</h1>
           
            <CardGroup className='stat-card-groups'>
                <Card className='stat-single-card'>
                    
                    <Card.Body>
                    <Card.Title>Packages</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                        17+
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Poeple made tours</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                         650+
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Positive Reviews</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                       475+
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
               
            </CardGroup>
            </div>
        
    );
};

export default Stats;