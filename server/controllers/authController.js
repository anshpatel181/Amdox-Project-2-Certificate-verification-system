import jwt from "jsonwebtoken"
import { User } from "../models/authModel.js";
import bcrypt from "bcrypt"

// Generate jwt
const generateToken = (id, role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d"
    });
};

export const register = async (req, res) => {
    try {
        const {username, email, password, role} = req.body;

        const userExist = await User.findOne({email: email})
        if(userExist) {
            return res.status(400).json("User already exists")
        }
        
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const insertedDocument = await User.insertOne({username, email, password: hashedPassword, role});
        return res.status(201).json({
            message: "Registration Successful",
            token: generateToken(insertedDocument._id, insertedDocument.role),
            userId: insertedDocument._id.toString()
        })
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPassMatch = await bcrypt.compare(password, user.password);
        if(isPassMatch) {
            return res.status(201).json({
                message: "Login Successful",
                token: await user.generateToken(),
                userId: user._id.toString(),
            });
        }
        
        else {
            return res.status(400).json({message: "Invalid email or password"})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const user = async (req, res) => {
    const userData = req.user;
    return res.status(200).json({ userData })

}