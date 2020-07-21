import React, { useCallback } from "react";
import { /*connect,*/ useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} increase={onIncrease} decrease={onDecrease} />
    );
};

// export default connect(
//     (state) => ({
//         number: state.counter.number,
//     }),
//     { increase, decrease },
// )(CounterContainer);
export default CounterContainer;
