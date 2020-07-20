import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';

function CardComp(props) {
    return (
        <div>

            <CardDeck className="card-row">
                <Card>
                    
                    <Card.Body>
                        <Card.Header>
                        Firebase App
                        </Card.Header>
                        <Card.Img variant="top" src="/assets/images/firebase.png"/>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
        of the card's content.
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                    
                    </Card.Footer>

                </Card>
                <Card>
                    
                </Card>
                <Card>
                    
                </Card>
            </CardDeck>
            
        </div>
    );
}

export default CardComp;