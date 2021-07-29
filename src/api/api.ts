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
        "API-KEY": "d77a75fe-7115-4e50-afc0-bb6130f2edc0"
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
    }
}


//* Profile Page API ==================================================================================>

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(res => res.data);
    },

}


//* Auth Page API ==================================================================================>

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(res => res.data);
    },
}


