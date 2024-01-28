import { IDoctor, ISlot } from "../dto/doctor.dto"
import { database as DB } from "../database"

class DoctorServices {
   read = async () => {
      const data: Array<any> = []
      const doctors: IDoctor[] = await DB("doctor")

      for (let i = 0; i < doctors.length; i++) {
         let doctor = doctors[i]
         const slots: ISlot = await DB("slot").where("doctor_id", doctor?.id)
         data.push({ ...doctor, slots })
      }
      return data
   }

}

export default new DoctorServices() 