import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGLE_SWITCH = "TOGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const togleSwitch = () => ({ type: TOGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle,
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add("active");
    } else {
        divToggle.classList.remove("active");
    }
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    console.log("toggleSwitch");
    console.log(togleSwitch());
    store.dispatch(togleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};
