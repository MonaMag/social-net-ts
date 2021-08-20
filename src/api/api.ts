import axios from "axios";
import {UserType} from "../redux/users-reducer";


type GetUsersRequestType = {
    items: UserType[]
    error: string
    totalCount: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "aa8b38a0-d891-47fb-a84d-9f4fa4fde0d7"
    }
});


//* Users Page API ===================================================================================>
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            return res.data;
        })
    },

    follow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data);
    },

    unfollow(userId: number) {
        return instance.post(`follow/${userId}`).then(res => res.data);
    },
    //если у нас есть запросы на наш метод getProfile в другом API (допустим раньше писали его в userAPI), можем ссылаться на новый API
    /*getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }*/
}


//* Profile Page API ==================================================================================>

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }

}


//* Auth Page API ==================================================================================>

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(res => res.data);
    },
}


