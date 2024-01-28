import { database as DB } from "../database"
import { IUser } from "../dto/user.dto"
import { TOKEN_SECRET } from "../config/constant"
import jwt from "jsonwebtoken"


class User {
   email = async ({ email }: IUser) => {
      const user: IUser = await DB("user").where({ email }).first()
      if (!user) return { success: false, message: "Email not found", data: null }
      return { data: user, success: true }
   }

   token = async (user: IUser) => {
      try {
         const token = await jwt.sign(user, TOKEN_SECRET, {
            expiresIn: '2 days',
         })
         return token
      } catch (error) {
         return error
      }

   }

   verifyToken = async (token: string) => {
      return jwt.verify(token, TOKEN_SECRET, (err, data) => {
         if (err) {
            return null
         } else {
            return data
         }
      })

   }
}

export default new User()