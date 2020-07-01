// import React from "react";
// import PropTypes from "prop-types";

// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             <p>나의 이름은 {name}입니다.</p>
//             <p>children 값은 {children}입니다.</p>
//             <p>좋아하는 숫자는 {favoriteNumber}입니다.</p>
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: "신성철",
// };
// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
// };
// export default MyComponent;

import React, { Component } from "react";
import PropTypes from "prop-types";
class MyComponent extends Component {
    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                <p>나의 이름은 {name}입니다.</p>
                <p>children 값은 {children}입니다.</p>
                <p>좋아하는 숫자는 {favoriteNumber}입니다.</p>
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: "신성철",
};
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
