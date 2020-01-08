import React from 'react'

export default function FarmCard(props) {
    return (
        <div className='farmCard'>
            <div className='farmCardHeader'>
                <h4>{props.farm.title}</h4>
                <p>{props.farm.city}, {props.farm.state}</p>
            </div>
            <img src={props.farm.image_url}/>
            <div className='favorite'>
                <h5>{props.farm.street}</h5>
                <button className='heart'><i className="far fa-heart"></i></button>
            </div>
            <div className='farmCardDesc'>
                <p>{props.farm.description}</p>
                <button type='submit'>View Farm</button>
            </div>
        </div>    
        )
}