import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req , res, next) => {
     
    const {username,email,password} = req.body;
     
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password:hashedPassword});
    try{
        await newUser.save()
        res.status(201).json("user created successfully");
    } catch (error) {
        next(error);
    }
};

export const signin =async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const ValidUser = await User.findOne({email});
        if (!ValidUser) return next(errorHandler(404,'User Not Found'));
        const ValidPassword = bcryptjs.compareSync(password, ValidUser.password);
        if (!ValidPassword) return next(errorHandler(401, "Wrong Credentials!"));
        const token = jwt.sign({id: ValidUser._id}, process.env.JWT_SECRET);
        const {password:pass, ...rest} = ValidUser._doc;
        res.cookie("acces_token", token, {httpOnly: true }).status(200).json(rest);
        

    } catch (error){
        next(error);
    }
}