
import React from 'react'
import {connect} from 'react-redux';
import User from './component/User';
class App extends React.Component {
    render() {
        console.log(this.props);
        return (<User/>)
    }
}



const mapStateToProps = state => state;

//const mapStateToProps = state => ({user:state.user.user});
const mapDispatchToProps = (dispatch) => {

    return {getUser: (id) => dispatch(fetchUsers(id))};
}
//const  AppContainer =connect(mapStateToProps)(App);
const  AppContainer =connect(null,mapDispatchToProps)(App);

export default AppContainer;

