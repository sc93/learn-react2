import { useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default function useInputs(initialForm) {
    const [state, dispacth] = useReducer(reducer, initialForm);
    const onChange = (e) => dispacth(e.target);
    return [state, onChange];
}
