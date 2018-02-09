/**
 * Created by varun on 14/9/17.
 */
import React from 'react'
import PropType from 'prop-types'
export default class ProgressBar extends React.Component {
    constructor(){
        console.log('constructor');
        super();
        this.state = {
           isFetching:false
        };
    }
    componentWillMount() {
        // add listeners
        console.log('componentwillmount');
    }

    componentWillUnMount() {
        // remove listeners
        console.log('componentWillUnMount');
    }

    componentDidMount(){
        //Best places for Api calls
        console.log('componentdidmount');
        console.log('false');
        this.setState({
            isFetching: false
        });
    }

    componentWillReceiveProps(oldProps, nextProps) {
        //for doing further changes
        //ex - like pagination,sorting etc
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('shouldcomponentupdate');
        //true for calling render, false to stop re-rendering
        return true;
    }
    componentWillUpdate() {
        console.log('componentwillupdate');
    }

    componentDidUpdate() {
        //auto save feature
        console.log('componentdidupdate');

    }

    render() {
        console.log('render');
        let {downloaded,total,user}=this.props;
        return(
            <div>
                Your file downloaded : {(downloaded * 100)/ total}% {user.id}
            </div>
        )
    }
}

ProgressBar.defaultProps = {
    total: 100,
};

ProgressBar.propTypes = {
    downloaded : PropType.number.isRequired,
    total: PropType.number.isRequired,
    user:PropType.shape({
        id:PropType.number.isRequired
    }).isRequired
};

