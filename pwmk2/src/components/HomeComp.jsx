import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

function HomeComp(props) {
    return (
        <>
            <Container fluid className="landing">
                
                <Row>
                    <Col className="title">
                        <p>Asis Sotelo</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Data,Science, <span>&#38;</span> Tech</p>
                    </Col>
                </Row>
            
            </Container>


        </>
    );
}

export default HomeComp;