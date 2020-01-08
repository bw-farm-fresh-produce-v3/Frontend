
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FarmCard from './FarmCard'

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
        <div>Farm List
            {farms.map(farm => <FarmCard farm={farm}/>)}
        </div>
    )
}

export default FarmList;