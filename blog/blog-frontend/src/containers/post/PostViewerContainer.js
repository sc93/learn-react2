import React, { useEffect } from "react";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostActionButtons from "../../components/post/PostActionButtons";
import { setOrijinalPost } from "../../modules/write";
import { removePost } from "../../lib/api/posts";

const PostViewerContainer = ({ match, history }) => {
    const { postId } = match.params;
    const dispatch = useDispatch();
    const { post, error, loading, user } = useSelector(
        ({ post, loading, error, user }) => ({
            post: post.post,
            error: post.error,
            loading: loading["post/READ_POST"],
            user: user.user,
        }),
    );

    useEffect(() => {
        dispatch(readPost(postId));
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);
    const onEdit = () => {
        dispatch(setOrijinalPost(post));
        history.push("/write");
    };
    const onRemove = async () => {
        try {
            await removePost(postId);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    const ownPost = (user && user._id) === (post && post.user._id);

    return (
        <PostViewer
            post={post}
            loading={loading}
            error={error}
            actionButtons={
                ownPost && (
                    <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
                )
            }
        />
    );
};

export default withRouter(PostViewerContainer);
