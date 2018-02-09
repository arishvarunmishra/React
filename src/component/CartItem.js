/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import Button from "./Button.js";
    const CartItem= (props)=>  {
        const styleImage = {
            height:20,
            width:20
        };
        const styleName = {
            color: '#000000',
            fontSize:20
        };
        const stylePrice = {
            color: '#443183',
            fontSize:15,
        };
        const styleDiv = {
            width:300,
            background:'#83e196',
            padding:15,
        };
        const styleLi = {
            listStyle: 'none'
        };

        const styleButton = {
            marginRight: 5,
            padding:10,
            fontSize: 14
        };


        return (<li style={styleLi}>
            <div style={styleDiv} >
                <span style={styleName} >{props.cartItem.name} </span>
                <span style={stylePrice}> {props.cartItem.quatity} </span>
                <span style={stylePrice}> {props.cartItem.price} </span>
                <Button styleButton={styleButton}  buttonName="+" onClick={(buttonName) => props.onClick(buttonName,props.cartItem)}/>
                <Button styleButton={styleButton}  buttonName="-"  onClick={(buttonName) => props.onClick(buttonName,props.cartItem)}/>
                <Button styleButton={styleButton}  buttonName="x"  onClick={(buttonName) => props.onClick(buttonName,props.cartItem)}/>
            </div>
        </li>)
}

export default CartItem;
