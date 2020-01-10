import React, {useState} from 'react'

export default function FarmCard(props) {
    const [favorite, setFavorite] = useState(true);

    const toggleButton = e => {
        if (favorite === false) {
            setFavorite(true)
        }
        else {
            setFavorite(false)
        }
    }

    const onClick = e => {
        window.location.href='/produce';
    }

    return (
        <div className='farmCard'>
            <div className='farmCardHeader'>
                <h4>{props.farm.title}</h4>
                <p>{props.farm.city}, {props.farm.state}</p>
            </div>
            <img src={props.farm.image_url} alt='farm picture'/>
            <div className='favorite'>
                <h5>{props.farm.street}</h5>
                {favorite ? (
                    <button className='heart' onClick={toggleButton}><i className="far fa-heart"></i></button>
                ): (<button className='heart' onClick={toggleButton}><i className="fas fa-heart"></i></button>)}
                
            </div>
            <div className='farmCardDesc'>
                <p>{props.farm.description}</p>
                <button type='submit' onClick={onClick}>View Farm</button>
            </div>
        </div>    
        )
}