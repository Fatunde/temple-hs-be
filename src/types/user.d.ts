export type IUserType = "doctor" | "patient";

export interface ISlot {
   id?: number;
   doctor_id?: number;
   date?: Date;
   is_occupied?: boolean;
   created_at?: string;
   updated_at?: string;
}

export interface IUser {
   _id?: string;
   email?: string;
   phone?: string;
   first_name?: string;
   last_name?: string;
   role?: IUserType;
   token?: string;
}

export interface IDoctor {
   id?: string;
   name?: string;
   field?: string;
   about?: string;
   image?: string;
   enterprise_type?: string;
   slots?: ISlot[];
}

export interface IDoctorsResponse extends IBaseResponse {
   data: IDoctor[];
}