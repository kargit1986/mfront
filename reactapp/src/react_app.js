import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactButton from './react-button.js'

class App extends Component {
    state = {
        value: 'myvalue'
    };
    componentDidMount() {
    }
    render() {
        return (
            <div>
            <ReactButton/>
            </div>
        )
    }
}
