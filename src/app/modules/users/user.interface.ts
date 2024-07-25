import { Types } from "mongoose"

export type Tuser = {
    _id: Types.ObjectId,
    email: string,
    password: string,
    role: string
} 