import "@webcomponents/custom-elements"
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './react-app.js'

window.customElements.define('react-app', class ReactApp extends HTMLElement {
    static get observedAttributes() {
        return ['error-mode', 'title'];
    }

    getTitle() {
        return this.getAttribute('title');
    }

    produceError(e) {
        this.dispatchEvent(new CustomEvent('error', {detail: e}));
    }

    constructor() {
        super();
    }

    connectedCallback() {
        render(<App title="hello" greeting="world"/>, this);
        this.addEventListener("click",function(e) {
            alert("clicked");
        });
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
    }
});


