import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../Redux/actions";

const IncrementDecrement = (props) => {
    const { count, increment, decrement, reset } = props;
    return (
        <>
            <div>{count}</div>
            <button type="button" onClick = {increment}>Increment</button>
            <button type="button" onClick = {decrement}>Decrement</button>
            <button type="button" onClick = {reset}>Reset</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrement);