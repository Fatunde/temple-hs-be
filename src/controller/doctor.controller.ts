import { Request, Response } from "express"
import DoctorService from "../services/doctor.service"

class DoctorController {

   read = async (req: Request, res: Response) => {
      try {
         const data = await DoctorService.read()
         res.status(200).json({ success: true, code: 200, data })
      } catch (error: any) {
         res.status(500).json(error.message)
      }
   }


}

export default new DoctorController()