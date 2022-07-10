import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { responseSend } from "../helpers/responseSend.js";
import { createUser, readUser } from "../services/user.service.js";
import { sendWelcomeEmail } from "../utils/sendEmail.js";

export const emailSignUp = async (req,res,next) => {
    try {
        const {email,first_name,last_name} = req.body
        const userData = await createUser(req.body)
        sendWelcomeEmail(first_name, last_name, email);
        responseSend(res,201,true,"User created successfully",userData)

    } catch (error) {
        next(error)
    }

};
export const emailLogin = async(req,res,next)=>{
    try {
        const {email,password}=req.body
        const userInfo =await readUser({email})
    
        if(!userInfo){
            throw new Error("User not found")
        }
        const passwordMatch= await bcrypt.compare(password,userInfo.password)
        if(!passwordMatch) throw new Error("Password is incorrect")
        const token = jwt.sign({ user_id:userInfo._id },process.env.JWT_SECRET,{expiresIn:"5m"});

        userInfo.password = undefined;
        const responseData = {
            ...userInfo,
            token
        }

        responseSend(res,200,true,"Login Successful",responseData)
        
    } catch (error) {
        next(error)
    }
   

}
