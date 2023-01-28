import express from 'express';
import { deleteUserById, getAuthUser, getUserById } from '../controllers/user.controller.js';
const routerUser = express.Router();


routerUser.get('/', getAuthUser)
routerUser.get('/:id', getUserById)
routerUser.delete('/:id', deleteUserById)

export default routerUser;