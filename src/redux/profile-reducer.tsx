import {ActionsType, PostPropsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const  initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?!', likesCount: 20},
        {id: 3, message: 'Hi, my dear!', likesCount: 18},
        {id: 4, message: 'Where are you!', likesCount: 25}
    ],
        newPostText: ''
};


const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

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