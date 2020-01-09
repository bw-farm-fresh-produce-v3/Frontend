import React from 'react';

export function ProduceCard(props) {
    console.log(props)
    
    return(
        <div>
            <h2>props.item.name}</h2>
           <p>Description: {props.item.description}</p>
        </div>
    )
}