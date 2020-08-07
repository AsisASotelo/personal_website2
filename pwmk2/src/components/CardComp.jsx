import React from 'react';
import {Card, CardDeck, Container,Row,Col} from 'react-bootstrap';
import SingleCard from './SingleCard';

function CardComp(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md ={4}>
                        <SingleCard/>
                            
                    </Col>
                    <Col md={4}>
                        <SingleCard/>
                        
                    </Col>
                    <Col md = {4}>
                        <SingleCard/>
                        
                    </Col>
                </Row>


            </Container>

            
                
            
        </div>
    );
}

export default CardComp;