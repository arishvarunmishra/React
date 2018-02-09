/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
const Input =(props)=>{
    const inputStyle ={
        padding:10,
        width:300,
        fontSize: 12,
        letterSpacing:1
    };
    const errorStyle ={
        marginBottom: 20,
        padding:10,
        width:300,
        color:'red',
        fontSize: 12
    };
    return (
        <div><input  onKeyDown={(e) => props.onKeyDown(e)} ref={(myInput) => {props.onRefget(myInput)}} style={inputStyle} onChange={(e) => props.onChange(e)} placeholder={props.placeholder} value={props.value}/><div style={errorStyle}>{props.error}</div></div>)
}

Input.defaultProps = {
    error: '',
};

export default  Input;



