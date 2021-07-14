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
        "API-KEY": "3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },

    getUserUnfollowing (userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },

    getUserFollowing (userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    getAuthUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
}


/*
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get<GetUsersRequestType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}).then(response => {
            return response.data;
    })
}
*/
