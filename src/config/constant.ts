import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT
export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_NAME = process.env.DB_NAME || "templehs_accessment"
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "password"
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "umbrella"


