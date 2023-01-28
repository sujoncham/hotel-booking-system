import Hotel from "../models/Hotel.Model.js";

export const getHotelData = async(req, res, next)=>{
    try {
        const hotels = await Hotel.find({})
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const addHotel = async(req, res, next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateById = async(req, res, next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new : true})
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getDataById = async(req, res, next)=>{
    try {
        const getById = await Hotel.findById(req.params.id)
        res.status(200).json(getById);
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "hotel didn't find",
            error: error,
        });
    }
}

export const deleteById = async(req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('delete Hotel info');
    } catch (error) {
        next(error);
    }
}