import  express from "express";
import {
    getUserFriends,
    addRemoveFriend,
    getuser,
} from '../controller/users.js';
import { verifytoken } from "../midddleware/auth.js";

const router = express.Router();

// read
router.get('/:id',verifytoken,getuser);
router.get('/:id/friends',verifytoken,getUserFriends);

// update
router.patch('/:id/:friendId',verifytoken,addRemoveFriend);

export default router;