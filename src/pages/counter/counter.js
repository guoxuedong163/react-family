import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';
import { connect } from 'react-redux';

class Counter extends Component {

    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={() => { this.props.increment() }}>增加</button>
                <button onClick={() => { this.props.decrement() }}>减少</button>
                <button onClick={() => { this.props.reset() }}>重置</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Counter)