import { Tuser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcryptjs";

const findUserByEmail = async (email: string) => {
    return User.findOne({email:email})
};

const createUser = async (email: string , password: string , role: string) => {
    const hashPassword = await bcrypt.hash(password , 10);
    const user = await new User({email, password:hashPassword , role});
    return await user.save();
}

const isValidPassword = async (inputPassword:string , userPassword: string) => {
    return bcrypt.compare(inputPassword , userPassword);
}

export const userServices = {
    findUserByEmail,
    createUser,
    isValidPassword
}