import User from "../models/User.Model.js";

export const getAuthUser = async (req, res, next)=>{
    try {
        const getUser = await User.find();
        res.status(200).json({
            status: "success",
            message: "user data get successfully",
            data: getUser,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "user data not get",
            error: error.message,
        })
    }
}

export const getUserById = async () =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            message: "user data get successfully",
            data: user,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "user data not get",
            error: error.message,
        })
    }
}

export const deleteUserById = async() =>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success",
            message : "user deleted",
        })
    } catch (error) {
        console.log(error)
    }
}