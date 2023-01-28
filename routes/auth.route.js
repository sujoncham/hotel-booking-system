import express from 'express';
import { authLogin, authRegister } from '../controllers/auth.controller.js';
const routerAuth = express.Router();




routerAuth.post('/login', authLogin)

routerAuth.post('/register', authRegister)

export default routerAuth;