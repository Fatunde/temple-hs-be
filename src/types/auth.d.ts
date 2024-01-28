import { IUser } from "./user";

export interface IBaseResponse {
  code: string | number;
  message: string;
  error?: any;
  status?: string | number;
}

export interface ILoginUserRequest {
  email?: string;
  password: string;
  phone?: string | number;
}

export interface ILoginUserResponse extends IBaseResponse {
  token: string;
  data: IUser;
}
