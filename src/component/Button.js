/**
 * Created by varun on 13/9/17.
 */

import React from 'react'
 const Button= (props)=>  {
        return (<button style={props.styleButton} onClick={() =>props.onClick(props.buttonName)}>{props.buttonName}</button>)
}
export default Button;

