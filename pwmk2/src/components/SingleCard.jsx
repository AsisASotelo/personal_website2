import React, { Component } from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import IconLabel from './IconLabel';
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';


function SingleCard(props){
    
    return(

       <Card>
           <Card.Header>
               <emp>{props.title}</emp>
           </Card.Header>
           <Card.Img height = {250} width={250} src = {props.image}/>
           <Card.Body>
               {props.body}
           </Card.Body>
           <IconLabel
            icon = {foursquareIcon}></IconLabel>
       </Card>


    )
}

export default SingleCard;
