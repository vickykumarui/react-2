import React from 'react';

const ValidationComponent = (props)=>{
    return(
    <div>Entered value length: {props.textLength > 5 ? "Too long" : "Too short"}</div>
    );
}

export default ValidationComponent;