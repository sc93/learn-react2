// ducks 패턴

import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 액션타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션생성 함수
let id = 3; // insert 호출될 때마다 1씩 증가
// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

// export const insert = (text) => ({
//     type: INSERT,
//     todo: { id: id++, text, done: false },
// });
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));

// export const toggle = (id) => ({ type: TOGGLE, id });
export const toggle = createAction(TOGGLE, (id) => id);

// export const remove = (id) => ({ type: REMOVE, id });
export const remove = createAction(REMOVE, (id) => id);

//초기상태
const initialState = {
    input: "",
    todos: [
        { id: 1, text: "리덕스 기초", done: true },
        { id: 2, text: "리액트-리덕스 기초", done: false },
    ],
};

// function todos(state = initialState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo),
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo) =>
//                     todo.id === action.id
//                         ? { ...todo, done: !todo.done }
//                         : todo,
//                 ),
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter((todo) => todo.id !== action.id),
//             };
//         default:
//             return state;
//     }
// }

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) =>
            produce(state, (draft) => {
                draft.input = input;
            }),

        [INSERT]: (state, { payload: todo }) =>
            produce(state, (draft) => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const todo = draft.todos.find((todo) => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id }) =>
            produce(state, (draft) => {
                const todo = draft.todos.findIndex((todo) => todo.id === id);
                draft.todos.splice(todo, 1);
            }),
    },
    initialState,
);
export default todos;
