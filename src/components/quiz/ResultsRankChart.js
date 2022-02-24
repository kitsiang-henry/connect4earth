import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Divider, Link } from '@material-ui/core';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const ResultsRankChart = () => {
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
    };

    const data=[
        { title: '#1 Plant Protector', value: 35, color: '#2C2C73' },
        { title: '#2 Climate Change Advocate', value: 25, color: '#403D94' },
        { title: '#3 Tree in the Forest', value: 15, color: '#277FD9' },
        { title: '#4 Growing Plant', value: 10, color: '#2BC9D9' },
        { title: '#5 Young Seedling', value: 5, color: '#80EDE7' },
    ]

    return (
        <div>
            <h1 style={{fontFamily: 'Montserrat', margin: 0}}><FactCheckIcon />Result Ranks</h1>
            <br/><br/>
            <Divider />
            <b>#1 Plant Protector: </b>You're a high scorer living a very green lifestyle. 
            <Divider />
            <b>#2 Climate Change Advocate:</b> You are always eager to learn about new sustainable practices. 
            <Divider />
            <b>#3 Tree in the Forest:</b> You put in minimal effort to live sustainably.
            <Divider />
            <b>#4 Growing Plant: </b>You are taking baby steps to live a greener lifestyle.
            <Divider />
            <b>#5 Young Seedling: </b>You know nothing much about climate change.
            <Divider />
            <br/><br/>
            <Link href="https://www.pggoodeveryday.com/good-news/10-home-sustainability-ideas/">Read: How to make a Big Impact from Home</Link>
        </div>
    )
};

export default ResultsRankChart;