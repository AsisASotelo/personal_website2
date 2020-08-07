import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import {Button} from 'react-bootstrap'
import pythonIcon from '@iconify/icons-logos/python';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';
import linuxIcon from '@iconify/icons-fa-brands/linux';
import latexIcon from '@iconify/icons-simple-icons/latex';
import hadoopIcon from'@iconify/icons-logos/hadoop';


function IconLabel(props){
    return(

   
        <Button className = "mt-2" color ="success"> <Icon icon={foursquareIcon} /> Foursquare </Button>     

    )
}

export default IconLabel;