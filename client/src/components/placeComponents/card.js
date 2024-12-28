import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MapIcon from '@material-ui/icons/Map';

import './card.css'

const Card = (props) => {
    
    console.log(props.img[0]);
    return(
        <div>
            <div class='Card'>
                <img src={imgLink} alt='No Image' />
                <h3>{props.name}</h3>
                <h4>{props.city}, {props.country}</h4>
                <p>{props.description}</p>
                <div className='cardBtn'>
                <button onClick={props.show}><MapIcon /></button>
                <div style={{"width": "100%"}}/>
                <button><EditIcon /></button>
                <button onClick={props.del}><DeleteIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Card

const imgLink = "data:image/jpeg;base64,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"