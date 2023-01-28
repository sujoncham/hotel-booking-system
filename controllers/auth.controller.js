import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.Model.js";
const saltRounds = 10;



export const authLogin = async (req, res, next)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return console.log('username not found');
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return console.log('Password is not correct');

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, { expiresIn: '2d' })
        const {password, isAdmin, ...others} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...others});
    } catch (error) {
        next(error)
        res.status(400).json({
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

