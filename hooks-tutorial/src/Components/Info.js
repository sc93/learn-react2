import React from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}
const Info = () => {
    const [state, onChange] = useInputs({
        name: "",
        nickname: "",
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input
                    placeholder="이름"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <input
                    placeholder="닉네임"
                    name="nickname"
                    value={nickname}
                    onChange={onChange}
                />
            </div>
            <div>
                <p>
                    이름 : <b>{name}</b>
                </p>
                <p>
                    닉네임 : <b>{nickname}</b>
                </p>
            </div>
        </div>
    );
};

export default Info;
