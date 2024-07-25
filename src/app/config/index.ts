import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET
}