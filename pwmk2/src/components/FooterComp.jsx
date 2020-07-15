import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

function FooterComp(props) {
    return (
        <Container className="footerCust">
            <Row>

                
                <Col> 

                <p>Designed in Watts, California</p>
                <p>© Copyright 2020 Asis Sotelo</p>
                
                </Col>
               

            </Row>
        </Container>
    );
}

export default FooterComp;