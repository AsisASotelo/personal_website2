import React from 'react';
import { useState } from 'react';
import FooterComp from '../components/FooterComp';
import TitleComp from '../components/TitleComp';
import HeaderComp from '../components/HeaderComp';
import CardComp from '../components/CardComp';
import {PROJECTS} from '../services/projects'
import Pagination  from '../common/pagination';

function ProjSec(props) {

    const [itemsCount,setItemsCount] = useState(0);
    const [projects,setProjects] = useState(PROJECTS);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3)

    return (
       <>
        <HeaderComp/>
        <TitleComp title="Projects" subtitle="A collection of my work..."/>
        <CardComp 
            items={projects}/>
        <Pagination
            itemsCount ={pageSize.length} 
            pageSize={pageSize}
            currentPage = {currentPage} 
            />
        <FooterComp/>
        
       </>
    );
}

export default ProjSec;