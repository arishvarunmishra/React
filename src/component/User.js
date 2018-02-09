/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import UserDetails from './UserDetails.js';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'
export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            userList : [
                {id:1,name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
                {id:2,name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
                {id:3,name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
                {id:4,name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
                {id:5,name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
            ]
        };

    }
    clickHandler = (user) => {
       console.log(user);
        browserHistory.push({
            pathname: "trabalhos/" + trabalho.id,
            state: {trabalhoDetails: trabalho}
        });
    };

    render() {
        const styleTitle = {
            color: '#000000',
            fontSize:30,
            margin:10,
            padding:15,
        };

        return (<div  style={styleTitle}>
            <div>Exercise-1</div>
            User detail
            <ul>
                {this.state.userList.map((user,index) =>
                    <UserDetails  onClick={(user) => this.clickHandler(user)} user={user} key={user.id}/>
                )}
            </ul>
        </div>)
    }
}
