import React, { Component } from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import IconLabel from './IconLabel';
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';


function SingleCard({title,body,image,icons}){
    
    return(

       <Card>
           <Card.Header>
               <emp>{title}</emp>
           </Card.Header>
           <Card.Img height = {250} width={250} src = {image}/>
           <Card.Body>
               {body}
           </Card.Body>
           <IconLabel
            icon = {icons}></IconLabel>
       </Card>


    )
}

export default SingleCard;
