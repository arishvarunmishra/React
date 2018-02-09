/**
 * Created by varun on 18/9/17.
 */


import React from 'react'
import {withRouter } from 'react-router-dom'
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
const Links= ({match,history})=>  {
    return (<div> Exercise-4
        <div>{JSON.stringify(match)} history {JSON.stringify(history)}</div>

    </div>)
}
export default withRouter(Links);