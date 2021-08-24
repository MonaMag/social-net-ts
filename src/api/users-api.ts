import {APIResponseType, GetUsersRequestType, instance} from './api';


//* Users Page API ===================================================================================>
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersRequestType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    follow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data);
    },

    unfollow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data);
    },



    //если у нас есть запросы на наш метод getProfile в другом API (допустим раньше писали его в userAPI), можем ссылаться на новый API
    /*getProfile(userId: number) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }*/
}


