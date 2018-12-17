import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ReactButton extends Component {
    clicked() {
        window.dispatchEvent(new CustomEvent('click', {detail: 'detail'}));
    }

    render() {
        return (
        <div>
            <h1> Rect Component </h1>
            <button onClick={this.clicked} > Ok </button>
        </div>);
    }
}
