import React from 'react';
import {Card, CardDeck, Container,Row,Col} from 'react-bootstrap';
import SingleCard from './SingleCard';

function CardComp(props) {
    return (
        <div>
            <Container>
                <Row>
                    {props.items.map(project=>(

                        <Col key ={project._id} md ={4}>
                            <SingleCard
                                title={project.title}
                                />
                                
                        </Col>

                    ))}
                </Row>


            </Container>

            
                
            
        </div>
    );
}

export default CardComp;