import React from 'react';
import './CharComponent.css';
const CharComponent = (props) =>{
    return(
    <div className = "charClass" onClick = {props.clickHandler}>{props.char}</div>
    )
}

export default CharComponent;