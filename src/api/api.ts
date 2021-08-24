import axios from "axios";
import {UserType} from "../redux/users-reducer";



export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "aa8b38a0-d891-47fb-a84d-9f4fa4fde0d7"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export type GetUsersRequestType = {
    items: UserType[]
    error: string
    totalCount: number
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

