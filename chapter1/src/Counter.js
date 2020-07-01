import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixerNumber: 0,
    };
    render() {
        const { number, fixerNumber } = this.state;
        return (
            <div>
                <h1>변하는 값 {number}</h1>
                <h1>변하지 않는 값 {fixerNumber}</h1>
                <button
                    onClick={() => {
                        this.setState(
                            (prevState) => ({
                                number: prevState.number + 1,
                            }),
                            () => {
                                console.group("----------------------");
                                console.log("방금 number가 증가하였습니다.");
                                console.log(this.state);
                                console.groupEnd();
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
