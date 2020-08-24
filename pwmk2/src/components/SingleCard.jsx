import React, { Component } from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import IconLabel from './IconLabel';


function SingleCard(props){
    
    return(

       <Card>
           <Card.Header>
               <emp>{props.title}</emp>
           </Card.Header>
           <Card.Img src = "assets/images/firebase.png"/>
           <Card.Body>
               Web application created for INF 551. Front-end uses React, ReactStrap, Utilize the inverted custom index from lalala
           </Card.Body>
           <IconLabel></IconLabel>
       </Card>


    )
}

export default SingleCard;
