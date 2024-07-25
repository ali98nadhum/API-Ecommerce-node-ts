import jwt from "jsonwebtoken";
import config from "../config";
import { Request , Response , NextFunction } from "express";

const JWT_SECRET = config.jwt_secret as string;

export const verfiyToken = (req: Request , res: Response , next: NextFunction) => {
    const token  = req.headers.authorization?.split(' ')[1];
    if(!token){
        res.status(401).send({message: "no token found"})
        return;
    }
    jwt.verify(token , JWT_SECRET , (err , decoded)=>{
        if(err){
            res.status(401).send({message: "no token found"})
            return;
        }
        (req as any).decoded = decoded;
        next();
    })
}

