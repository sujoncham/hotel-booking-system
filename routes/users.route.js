import express from 'express';
const routerUser = express.Router();


routerUser.get('/', (req, res)=>{
    res.send('users all');
});
routerUser.get('/login', (req, res)=>{
    res.send('Hello, this is user Login endpoint');
})
routerUser.get('/register', (req, res)=>{
    res.send('Hello, this is user register endpoint');
})

export default routerUser;