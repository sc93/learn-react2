import Router from 'koa-router';
import posts from './posts/index';
import auth from './auth/index';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

export default api;
