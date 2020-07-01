import React, { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false,
    };
    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000",
        });
        this.handleFocus();
    };
    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleButtonClick();
        }
    };
    handleFocus = () => {
        this.input.current.focus();
    };
    input = React.createRef();

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    className={
                        this.state.clicked
                            ? this.state.validated
                                ? "success"
                                : "failure"
                            : ""
                    }
                    ref={this.input}
                ></input>
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        );
    }
}

export default ValidationSample;
