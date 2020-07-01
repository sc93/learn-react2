// import React from "react";
// import ScrollBox from "./ScrollBox";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";

// const App = () => {
//     const obj = {
//         name: "신성철",
//     };
//     return (
//         <div>
//             <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//             <button
//                 onClick={() => {
//                     this.scrollBox.scrollToBottom();
//                 }}
//             >
//                 맨밑으로
//             </button>
//         </div>
//     );
// };

// export default App;

import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErroBoundary from "./ErroBoundary";
// import IterationSample from "./IterationSample";

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
    state = {
        color: "#000000",
    };
    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErroBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErroBoundary>
            </div>
        );
    }
}

export default App;
