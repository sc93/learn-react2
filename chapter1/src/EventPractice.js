import React, { useState } from "react";

const EventPractice = () => {
    // const [username, setUserName] = useState("");
    // const [message, setMessage] = useState("");
    // const onChangeUserName = (e) => setUserName(e.target.value);
    // const onChangeMessage = (e) => setMessage(e.target.value);

    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const onClick = () => {
        alert(form.username + " : " + form.message);
        setForm({
            username: "",
            message: "",
        });
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="이름"
                value={form.username}
                onChange={onChange}
            ></input>
            <input
                type="text"
                name="message"
                placeholder="메세지"
                value={form.message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
