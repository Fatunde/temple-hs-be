
export interface IDoctor {
   id?: string;
   name?: string;
   field?: string;
   about?: string;
   image?: string;
   enterprise_type?: string;
   slots?: Array<any>
}

export interface ISlot {
   id?: number;
   doctor_id?: number;
   date?: Date;
   is_occupied?: boolean;
}