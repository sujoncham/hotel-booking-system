import bcrypt from 'bcrypt';
import User from "../models/User.Model.js";
const saltRounds = 10;

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

export const authLogin = async (req, res, next)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return console.log('username not found');
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return console.log('Password is not correct');
        const {password, isAdmin, ...others} = user;
        res.status(200).json({...others});
    } catch (error) {
        next(error)
        res.status(200).json({
            status: "failed", 
            message: "username or password is wrong",
            error: error.message,
        })
    }
}

export const authRegister = async (req, res, next)=>{
    try {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
    })
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        next(error)
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

export const deleteById = async() =>{
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