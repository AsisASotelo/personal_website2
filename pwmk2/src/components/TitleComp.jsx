import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

function TitleComp({title,subtitle}) {
    return (
        <>
            <Container fluid className="landing">
                
                <Row>
                    <Col className="title">
                        <p>{title}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{subtitle}</p>
                    </Col>
                </Row>
            
            </Container>


        </>
    );
}

export default TitleComp;