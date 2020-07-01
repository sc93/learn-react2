import React, { useState, useMemo, useCallback, useRef } from "react";
const getAverage = (numbers) => {
    console.log("평균값 계산중....");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    console.log(sum);
    return sum / numbers.length;
};
const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const insert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
        inputEl.current.focus();
    }, [list, number]);
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input
                name="number"
                value={number}
                onChange={onChange}
                ref={inputEl}
            />
            <button onClick={insert}>등록</button>
            <ul>
                {list.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <div>
                <p>평균값 : {avg}</p>
            </div>
        </div>
    );
};

export default Average;
