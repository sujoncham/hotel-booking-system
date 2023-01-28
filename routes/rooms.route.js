import express from 'express';
const routerRoom = express.Router();


routerRoom.get('/', (req, res)=>{
    res.send('rooms');
});

export default routerRoom;