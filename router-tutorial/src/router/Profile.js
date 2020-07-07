import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
    shin: {
        name: "shin",
        description: "개발자1",
    },
    seong: {
        name: "seong",
        description: "개발자2",
    },
    cheol: {
        name: "cheol",
        description: "개발자3",
    },
};
const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;
