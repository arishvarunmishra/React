/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
    const UserDetails= (props)=>  {
        const styleImage = {
            height:200,
            width:200
        };
        const styleName = {
            color: '#000000',
            fontSize:20
        };
        const styleAge = {
            color: '#443183',
            fontSize:15,
            float:'right'
        };
        const styleDiv = {
            width:170,
            background:'#dee1de',
            padding:15,
        };
        const styleLi = {
            listStyle: 'none'
        };


        return (<li style={styleLi} onClick={() =>props.onClick(props.user)}>
            <img style={styleImage} src={props.user.avatar} alt={props.user.avatar}/>
            <div style={styleDiv} >
                <div style={styleName} >{props.user.name} <span style={styleAge}> {props.user.age} </span> </div>
            </div>
        </li>)
}

export default UserDetails;
