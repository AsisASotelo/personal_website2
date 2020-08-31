import React from 'react';
import { useState } from 'react';
import FooterComp from '../components/FooterComp';
import TitleComp from '../components/TitleComp';
import HeaderComp from '../components/HeaderComp';
import CardComp from '../components/CardComp';
import {PROJECTS} from '../services/projects'
import Pagination  from '../common/pagination';
import {paginate} from '../utils/pagination'

function ProjSec(props) {

    

    const [count,setCount] = useState(PROJECTS.length);
    const [allProjects,setAllProjects] = useState(PROJECTS);
    const [currentPage,setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3)



    const handlePageChange = (page)=>{
        setCurrentPage(page)
    }

    const projects = paginate(allProjects,currentPage,pageSize)

    return (
       <>
        <HeaderComp/>
        <TitleComp title="Projects" subtitle="A collection of my work..."/>
        <CardComp 
            items={projects}/>
        <Pagination
            itemsCount ={count} 
            pageSize={pageSize}
            currentPage = {currentPage}
            onPageChange={handlePageChange} 
            />
        <FooterComp/>
        
       </>
    );
}

export default ProjSec;