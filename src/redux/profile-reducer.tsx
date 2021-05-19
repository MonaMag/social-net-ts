import {ActionsType, PostPropsType, ProfilePageType, RootStateType} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: state.posts.length+1,
                message: state.newPostText,
                likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

       /* if (action.type === ADD_POST) {
            const newPost: PostPropsType = {
                id: state.profilePage.posts.length+1,
                message: state.profilePage.newPostText,
                likesCount: 0};
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = '';

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            state.profilePage.newPostText = action.newText;
        }
    return state;*/
}

export type ProfileReducerActionType = ReturnType<typeof  addPostAC> | ReturnType<typeof  changeNewPostTextAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const changeNewPostTextAC = ( text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export default profileReducer;