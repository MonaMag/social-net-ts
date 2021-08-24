import {instance, APIResponseType, ResultCodeForCapcthaEnum, ResultCodesEnum} from "./api";


//* Auth Page API ==================================================================================>

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginDataType = {
    userId: number
}

export const authAPI = {
    getAuthData() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe=false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginDataType, ResultCodesEnum | ResultCodeForCapcthaEnum>>(`auth/login`, {email, password, rememberMe}).then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(res => res.data);
    }
}


