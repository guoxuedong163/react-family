import React, { Component } from 'react';
import './page1.css';
import image from './images/test.png';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">this is page1
                <img src={image} alt=""/>
            </div>
        )
    }
}