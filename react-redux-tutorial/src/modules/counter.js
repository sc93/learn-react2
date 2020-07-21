import { createAction, handleActions } from "redux-actions";

// ducks 패턴

// 액션타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기상태
const initialState = {
    number: 0,
};

// 리듀서
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

export default counter;
