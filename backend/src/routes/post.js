import express from 'express';
import { getUserPosts, likePost, getFeedPosts} from '../controller/posts.js';
import { verifytoken } from '../midddleware/auth.js';

const router = express.Router();
// read
router.get('/', verifytoken,getFeedPosts);
router.get('/:userID/post', verifytoken,getUserPosts);


// update 

router.patch('/:id/like', verifytoken,likePost);

export default router;
