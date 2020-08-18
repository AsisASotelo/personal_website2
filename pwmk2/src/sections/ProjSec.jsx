import React from 'react';
import FooterComp from '../components/FooterComp';
import TitleComp from '../components/TitleComp';
import HeaderComp from '../components/HeaderComp';
import CardComp from '../components/CardComp';

function ProjSec(props) {
    return (
       <>
        <HeaderComp/>
        <TitleComp title="Projects" subtitle="A collection of my work..."/>
        <CardComp/>
        <CardComp/>
        <FooterComp/>
        
       </>
    );
}

export default ProjSec;