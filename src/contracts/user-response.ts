import {
  ResponseAttributes,
  ResponseData,
  ResponseTimestamps,
} from "./contracts-response";

export interface IUserResponse extends ResponseTimestamps {
  name: string;
  email: string;
  phone: string;
}

export type UserResponseAttr = ResponseAttributes<IUserResponse>;

export type UserResponseData = ResponseData<IUserResponse>;
