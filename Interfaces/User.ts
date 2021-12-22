import { UserType } from "../Enums/UserType";

export interface User{
    username: string,
    password: string,
    type: UserType,
}