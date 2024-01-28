import { Request, Response } from "express"
import AuthServices from "../services/auth.service"

class AuthController {

   register = async (req: Request, res: Response) => {
      try {
         const data = await AuthServices.register(req.body)
         res.status(200).json({ success: true, code: 200, data })
      } catch (error: any) {
         res.status(500).json(error.message)
      }
   }

   login = async (req: Request, res: Response) => {
      try {
         const data = await AuthServices.login(req.body)
         res.status(200).json({ success: true, code: 200, ...data })
      } catch (error: any) {
         res.status(500).json(error.message)
      }
   }

   token = async (req: Request, res: Response) => {
      try {
         const data = AuthServices.token(req)
         res.status(200).json({ success: true, code: 200, data })
      } catch (error: any) {
         res.status(500).json(error.message)
      }
   }
}

export default new AuthController()