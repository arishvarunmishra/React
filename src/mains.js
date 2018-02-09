/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import {render} from 'react-dom';
import User from './component/User';
import Calculator from './component/Calculator.js';
import ProgressBar from './component/ProgressBar.js';
import MyCard from './component/MyCard.js';
import Links from './component/Links.js';

import {BrowserRouter as Router,Route,Link } from 'react-router-dom'

import {createStore,combineReducers,applyMiddleware} from 'redux';



const userState={userName:''};
const userReducer =(state =userState,action)=>{
    return {...state.users};
    console.log("userReducer",action.type,action.value);
};

const prodState={prodName:''};
const prodReducer =(state =prodState,action)=>{
    return {...state.prod};
    console.log("prodReducer",action.type,action.value);

};


const reducers =combineReducers({
    reducer:reducer,
    users:userReducer,
    prod:prodReducer
});

const initialState={counter:0};

const reducer =(state =initialState,action)=>{
    console.log("action",action.type,action.value);
    const newState ={...state};
    switch (action.type){
        case "INC":
            newState.counter= newState.counter+action.value;
            return newState;
        case "DEC":
            newState.counter= newState.counter-action.value;
            return newState;
        case "COMPLETE":
            newState.counter= action.value;
            return newState;
        default:
            return newState;

    }
};



const inc=()=>{
    return {type:'INC',value:1};
}

const action=()=>{
    return  (dispatch) => {
        dispatch({type:'STARTED'});
        setTimeout(function () {
            dispatch({type:'COMPLETED',value:100});
        },5000);
    };
}

const logger=store=>next=>action=>{
    //console.log("MW",action);
    next(action);
}

const asyncMW=store=>next=>action=>{
    if(typeof action==='function'){
        console.log("MW Function");
        action(store.dispatch);
    }else{
       console.log("MW Function",action);
        next(action);
    }
}

const middleWare = applyMiddleware(asyncMW,logger);


const store =createStore(reducers,middleWare);

store.subscribe(()=>{
    console.log("updated ", store.getState())
});

store.dispatch(action());
store.dispatch(inc());
store.dispatch({type:'INC',value:1});
store.dispatch({type:'INC',value:1});
store.dispatch({type:'INC',value:1});
store.dispatch({type:'DEC',value:1});
store.dispatch({type:'INC',value:1});
store.dispatch({type:'DEC',value:1});
store.dispatch({type:'INC',value:1});
store.dispatch({type:'INC',value:1});




/*
 render(<div>Exercise-1 <User/> Exercise-2 <Calculator/></div>, document.getElementById('app'));
render(<ProgressBar  downloaded={50} user={{'id':10}}/>, document.getElementById('app'));
 render(<MyCard/>, document.getElementById('app'));
 /*/

class PrivateRoute extends React.Component{


}

render(<div> <Router>
    <div>
        <Link to="/"> Exercise-1 </Link>
        <Link to="/cal"> Exercise-2 </Link>
        <Link to="/cart"> Exercise-3 </Link>
        <Link to="/private"> Exercise-4 </Link>
        <div>
            <Route exact path="/" component={User}></Route>
            <Route path="/cal" component={Calculator}></Route>
            <Route path="/cart" component={MyCard}></Route>
            <Route path="/private" component={Links}></Route>


        </div>
    </div>
    </Router>
</div>, document.getElementById('app'));







