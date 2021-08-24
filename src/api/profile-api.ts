import {APIResponseType, instance} from './api';
import {PhotosType, UserProfileType} from "../redux/profile-reducer";

type SavePhotoResponseDataType = {
    photos: PhotosType
}


//* Profile Page API ==================================================================================>

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data);
    }

}



