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
                <p>Farms near</p>
            </div>
            <div className='farms'>
                {farms.map(farm => <FarmCard farm={farm}/>)}
            </div>
        </section>
        
    )
}

export default FarmList;