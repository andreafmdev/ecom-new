import userModel from "../models/user.model.js"

export const createUser = async (data)=>{
    try {
        const userData = new userModel(data)
        return await userData.save()
    } catch (error) {
        throw new Error(error)
    }
}

export const readUser =async(filter,select={})=>{
    try {
        const userData =userModel.findOne(filter).select(select).lean();
        return userData;
    } catch (error) {
        throw new Error(error)

    }
}