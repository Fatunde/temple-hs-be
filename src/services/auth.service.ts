import { IUser } from "../dto/user.dto"
import { database as DB } from "../database"
import bcrypt from "bcrypt"
import UserHelper from "../helper/user.helper"

class AuthServices {
   login = async (data: IUser) => {
      const { email, password } = data
      //checking if email exist
      const user = await UserHelper.email({ email })
      if (!user.success) { return user }
      const isPassword = await bcrypt.compare(password ?? "", user?.data?.password ?? "")
      if (!isPassword) {
         return { success: false, code: 401, message: "invalid credentials", data: null }
      }
      return { data: { token: await UserHelper.token(user.data ?? {}) }, message: "Logged in success" }
   }

   register = async (data: IUser) => {
      const data_check = data
      const password = await bcrypt.hash(data_check?.password ?? "", 10)
      return await DB("user").insert({ ...data, password }).returning('id')
   }

   token = (req: any) => {
      return req.user
   }

}

export default new AuthServices() 