const checkloggedIn = (ctx, next) => {
    if (!ctx.state.user) {
        ctx.status = 401;
        return;
    }
    return next();
};

export default checkloggedIn;
