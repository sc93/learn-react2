import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} increase={increase} decrease={decrease} />;
};

export default connect(
    (state) => ({
        number: state.counter.number,
    }),
    { increase, decrease },
)(CounterContainer);
