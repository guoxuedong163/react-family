import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: this.state.count + 1 
        })
    }

    render() {
        return (
            <div>
                this is home <br />
                计数11：{this.state.count} <br />
                <button onClick={() => { this._handleClick() }}>增加</button>
            </div>
        )
    }
}