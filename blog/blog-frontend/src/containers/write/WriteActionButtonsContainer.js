import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writePost } from "../../modules/write";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { withRouter } from "react-router-dom";

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }));

    const onPublish = () => {
        dispatch(
            writePost({
                title,
                body,
                tags,
            }),
        );
    };

    const onCancel = () => {
        history.goBack();
    };

    useEffect(() => {
        if (post) {
            const { _id, user } = post;
            history.push(`/@${user.username}/${_id}`);
        }
        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);
    return (
        <WriteActionButtons
            onPublish={onPublish}
            onCancel={onCancel}
        ></WriteActionButtons>
    );
};

export default withRouter(WriteActionButtonsContainer);
