import express from 'express';
import { authLogin, authRegister, deleteById, getAuthUser, getUserById } from '../controllers/auth.controller.js';
const routerAuth = express.Router();


routerAuth.get('/', getAuthUser)
routerAuth.get('/:id', getUserById)
routerAuth.delete('/:id', deleteById)

routerAuth.post('/login', authLogin)

routerAuth.post('/register', authRegister)

export default routerAuth;