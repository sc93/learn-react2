import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkloggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkloggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete(
    '/:id',
    checkloggedIn,
    postsCtrl.checkOwnPost,
    postsCtrl.getPostById,
    postsCtrl.remove,
);
posts.patch(
    '/:id',
    checkloggedIn,
    postsCtrl.checkOwnPost,
    postsCtrl.getPostById,
    postsCtrl.update,
);

export default posts;
