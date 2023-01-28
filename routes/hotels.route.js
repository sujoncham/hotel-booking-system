import express from 'express';
import { addHotel, deleteById, getDataById, getHotelData, updateById } from '../controllers/hotel.controller.js';
const routerHotels = express.Router();


routerHotels.get('/', getHotelData);

routerHotels.post('/addHotel', addHotel);

routerHotels.patch('/:id', updateById);

routerHotels.get('/:id', getDataById);

routerHotels.delete('/:id', deleteById);

export default routerHotels;