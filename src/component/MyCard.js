/**
 * Created by varun on 15/9/17.
 */
import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Input from './Input.js'
import CartItem from './CartItem.js'

export default class MyCard extends React.Component {
    constructor() {
        super();
        this.state = {
            total:0,
            inputValue: '',
            errorMessage:'',
            cartItem:[]
        }

    };

    componentDidMount(){
        this.input.focus();
    };

    shouldComponentUpdate() {
        //console.log('shouldcomponentupdate');
        //true for calling render, false to stop re-rendering
        return true;
    }
    componentWillUpdate() {
       // console.log('componentwillupdate');
    }

    componentDidUpdate() {
        //auto save feature
        // console.log('componentdidupdate');

    }

    onChangeHandler= (e) => {
       // console.log(e);
        this.setState({
            inputValue: e.target.value
                   });
    };
    onRefget= (ref) => {
        this.input=ref;
    };
    onKeyDown= (e) => {
        if(e.keyCode==13){
            let value =this.state.inputValue;
            let [name,price] = value.split("-");
            if(name && price){
                if(Number.isInteger(parseInt(price)) &&parseInt(price)>0){
                    let obj ={'name':name,
                        'quatity':1,
                        'price':parseInt(price)
                    }
                        this.setState({
                            total:this.state.total+parseInt(price),
                            inputValue: '',
                            errorMessage :'',
                            cartItem :[...this.state.cartItem, obj]
                        });
                    }else{
                    this.setState({
                        errorMessage :'Price must be number'
                    });
                }
            }else{
                this.setState({
                    errorMessage :'Item name and Price can not be blank'
                });
            }


        }

    };


    clickHandler = (operation,obj) => {
        if(operation=='+'){
            obj.quatity = obj.quatity+1;
            this.setState({
                total:this.state.total+obj.price
            });
        }else if(operation=='-'){
            if(obj.quatity >1){
                obj.quatity = obj.quatity-1;
                this.setState({
                    total:this.state.total-obj.price
                });
            }
        }else{
            let index = this.state.cartItem.indexOf(obj)
            this.state.cartItem.splice(index, 1);
            this.setState({
                total:this.state.total-(obj.quatity*obj.price),
                //cartItem :array
            });
        }
    };

    render() {
        const footerStyle={
            backgroundColor:'#015a83',
            width:300,
            height:20,
            padding:10

        }
        const styleRightDiv={
            color: '#ffffff',
            fontSize:20,
            float:'right'
        }
        const styleLeftDiv={
            color: '#ffffff',
            fontSize:20,
            float:'left'
        }
        const ulStyle={
           padding:0
        }

        return (<div >
            <div> Exercise-3</div>
            <Header title={'My Card'}/>
            <Input error ={this.state.errorMessage} onKeyDown={(e) => this.onKeyDown(e)} onRefget={(ref) => this.onRefget(ref)} onClick={(e) => this.clickHandler(e)} value={this.state.inputValue} placeholder={"Enter item and price separated by a -"}  onChange={(e) => this.onChangeHandler(e)} />
            <ul style={ulStyle}>
                {this.state.cartItem.map((cart,index) =>
                    <CartItem onClick={(buttonName,obj) => this.clickHandler(buttonName,obj)} cartItem={cart} key={index}/>
                )}
            </ul>
            <Footer styleDiv={footerStyle} styleLeftDiv={styleLeftDiv} styleRightDiv={styleRightDiv} title={'total'} titleValue={this.state.total}/>
           </div>)
    }
}