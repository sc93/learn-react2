import React, { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, name: "봄" },
        { id: 2, name: "여름" },
        { id: 3, name: "가을" },
        { id: 4, name: "겨울" },
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    const handleOnClick = () => {
        if (inputText.length === 0) {
            return;
        }
        const nextName = names.concat({ id: nextId, name: inputText });
        setNames(nextName);
        setNextId(nextId + 1);
        setInputText("");
    };
    const handleOnKeyPress = (e) => {
        console.log(e);
        if (e.key === "Enter") {
            handleOnClick();
        }
    };
    const handleRemove = (id) => {
        const nextName = names.filter((item) => item.id !== id);
        setNames(nextName);
    };
    const nameList = names.map((item) => (
        <li
            key={item.id}
            onDoubleClick={() => {
                handleRemove(item.id);
            }}
        >
            {item.name}
        </li>
    ));
    return (
        <>
            <input
                value={inputText}
                onChange={handleChange}
                onKeyPress={handleOnKeyPress}
            />
            <button onClick={handleOnClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
