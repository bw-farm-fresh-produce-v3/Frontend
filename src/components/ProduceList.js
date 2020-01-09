import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { ProduceCard } from '../components/ProduceCard';

export function ProduceList(props) {
    const [products, setProducts] = useState()

    useEffect(() => {
        localStorage.getItem('token') &&
        axiosWithAuth().get('https://bestfarm.herokuapp.com/api/products')
        .then((res) => {
            setProducts(res.data)
    })
    .catch(err => console.log (err))
 }, [])
 console.log(products)
    
    return(
        <div>
            <h1>Produce List</h1>
            {products ? products.map((item, index) => {
                return <ProduceCard item={item} key={index} />
            }):
            <h3>Loading</h3>
        }
        </div>
    )
}
