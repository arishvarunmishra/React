/**
 * Created by varun on 15/9/17.
 */

import React from 'react'
 const Footer= (props)=>  {
        return (<div style={props.styleDiv}> <div style={props.styleLeftDiv}>{props.title}</div> <div style={props.styleRightDiv}>{props.titleValue}</div></div>)
}
export default Footer;

