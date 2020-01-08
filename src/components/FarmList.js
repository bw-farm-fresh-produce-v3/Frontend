import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FarmCard from './FarmCard';
import bgImage from './farm.png';

const FarmList = props => {
    const [farms, setFarms] = useState([])
    useEffect(() => {
        axios.get('https://bw-fresh-farm-produce-backend.herokuapp.com/api/shops', {
            headers:{  "crossdomain": true }
        })
        .then(res => {
            console.log(res)
            setFarms(res.data.allShops)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])
    return (
        <section className='farmList'>
            <div className='headerImg'>
                <h1>Farms near </h1>
                <p>Choose any farms that fit your busy lifestyle.
                    For your convenience, our farms offer features that makes
                    eating healthy much easier.</p>
            </div>
            <section className='farmsMain'>
                <div className='filterBy'>
                    <p>Filter by</p>
                    <h4>Seasonal Fruits and Vegetables</h4>
                    <h4>All Year Fruits and Vegetables</h4>
                    <h4>Services Offered</h4>
                    <h4>Subscriptions</h4>
                    <h4>Favorite Farms</h4>
                </div>
                <div className='farms'>
                    {farms.map(farm => <FarmCard farm={farm}/>)}
                </div>
            </section>
        </section>
        
    )
}

export default FarmList;