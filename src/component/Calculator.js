/**
 * Created by varun on 13/9/17.
 */
import React from 'react';
import Input from './Input.js'
import Button from "./Button.js";
export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    onChangeHandler= (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };

    clickHandler = (operation) => {
        let value=this.state.inputValue;
        if(operation=='clear'){
            value='';
        }else if(operation =='='){
            value =eval(this.state.inputValue);
        }else{
            value =this.state.inputValue+operation
        }
        this.setState({
            inputValue: value
        });
    };

    componentDidMount(){
        this.input.focus();
    };

    onRefget= (ref) => {
        this.input=ref;
    };
    onKeyDown= (e) => {
        if(e.keyCode==13){
            console.log("onKeyDown add");
        }

    };



    render() {
        const styleButton = {
            display: 'inline-block',
            marginRight: 5,
            padding:10,
            width:'10%',
            fontSize: 24,
            verticalAlign: 'middle'
        };
        return (<div >
            <div> Exercise-2</div>
            <Input  onKeyDown={(e) => this.onKeyDown(e)} onRefget={(ref) => this.onRefget(ref)}  value={this.state.inputValue} placeholder={"click any button"} onChange={(e) => this.onChangeHandler(e)} />
            <Button styleButton={styleButton} buttonName="+" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button styleButton={styleButton} buttonName="-"  onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button styleButton={styleButton}  buttonName="*"  onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button styleButton={styleButton}  buttonName="/" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button styleButton={styleButton} buttonName="=" onClick={(buttonName) => this.clickHandler(buttonName)}/>
            <Button styleButton={styleButton} buttonName="clear" onClick={(buttonName) => this.clickHandler(buttonName)}/>
        </div>)
    }
}



