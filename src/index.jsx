import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css'; 
import Sdata from './Sdata';
ReactDOM.render(
    <>
    <h1 className='heading_style'>List of top 5 Netflix Series</h1>
    
    <Card 
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].links}
    />
    <Card 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].links}
    />
    <Card 
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].links} 
    />
    <Card 
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].links} 
    />
    <Card 
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].links} 
    />
    </>,

document.getElementById("root")

);