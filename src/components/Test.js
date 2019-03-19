import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        console.log("Constructor");
    }

    componentDidMount = () => {
        console.log("componentDidMount");
        //Api İstekleri
        this.setState({
            a: 20
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("Should Component Update");
        return false;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component Did Update");
    }
    render() {
        console.log("render");
        return (
            <div>

            </div>
        )
    }
}

export default Test;