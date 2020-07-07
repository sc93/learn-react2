import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./router/About";
import Home from "./router/Home";
const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/About">소개</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact={true} />
            <Route path="/About" component={About} />
        </div>
    );
};

export default App;
