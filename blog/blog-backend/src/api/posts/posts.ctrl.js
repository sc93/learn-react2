import Post from '../../models/post';

export const write = async (ctx) => {
    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });

    try {
        await post.save();
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const list = async (ctx) => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const read = async (ctx) => {
    const { id } = ctx.params;
    console.log(id);
    try {
        const post = await Post.findById(id).exec();
        console.log(post);
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (error) {
        ctx.throw(500, error);
    }
};

export const remove = (ctx) => {};

export const update = (ctx) => {};
