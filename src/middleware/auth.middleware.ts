import { NextFunction, Request, Response } from "express"
import UserHelper from "../helper/user.helper"
import { IUser } from "../dto/user.dto"


class Auth {
   register_required = async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, first_name, last_name } = req.body
      if (!email || !password || !first_name || !last_name) {
         return res.status(400).send({ success: false, message: "All fields are required" })
      }
      next()
   }

   email_existed = async (req: Request, res: Response, next: NextFunction) => {
      const { email } = req.body
      const existed = await UserHelper.email({ email })
      if (existed.success) {
         return res.status(400).send({ success: false, message: "Email already existed" })
      }
      next()
   }

   login_required = async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = req.body
      if (!email || !password) {
         return res.status(400).send({ success: false, message: "All fields are required" })
      }
      next()
   }

   authenticate = async (req: Request | any, res: Response, next: NextFunction) => {
      try {
         if (typeof req.headers.authorization === "undefined")
            return res.status(401).send({ success: false, message: "Authentication not provided" })
         const token = req.headers.authorization.split(" ");
         if (token && token[0] == "Bearer") {
            const token_user: any = await UserHelper.verifyToken(token[1]);
            if (!token_user) return res.status(401).send({ success: false, message: "Unauthorized" })
            const user = await UserHelper.email({ email: token_user?.email })
            if (!user.success) return res.status(401).send({ success: false, message: "Unauthorized" })
            req.user = user.data;
            next();
         } else {
            return res.status(401).send({ success: false, message: "Unauthorized" })
         }
      } catch (err) {
         next(err);
      }
   }
}

export default new Auth()