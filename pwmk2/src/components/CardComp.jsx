import React from 'react';
import {Card, CardDeck, Container,Row,Col} from 'react-bootstrap';

function CardComp(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm ={4}>
                            <Card>
                                <Card.Title>
                                    First Card
                                </Card.Title>
                                
                                

                            </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                        <Card.Title>
                                    First Card
                                </Card.Title>

                        </Card>
                    </Col>
                    <Col sm = {4}>
                        <Card>
                        <Card.Title>
                                    First Card
                                </Card.Title>

                        </Card>
                    </Col>
                </Row>


            </Container>

            
                
            
        </div>
    );
}

export default CardComp;