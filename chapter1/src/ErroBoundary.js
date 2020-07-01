import React, { Component } from "react";

class ErroBoundary extends Component {
    state = {
        error: false,
    };
    componentDidCatch(error, info) {
        this.setState({
            error: true,
        });
        console.log({ error, info });
    }
    render() {
        return this.state.error ? (
            <div>에러가 발생하였습니다</div>
        ) : (
            this.props.children
        );
    }
}

export default ErroBoundary;
