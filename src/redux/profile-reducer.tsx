const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
type initialStateType = {
    posts: Array<PostPropsType>
    newPostText: string
}

const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?!', likesCount: 20},
        {id: 3, message: 'Hi, my dear!', likesCount: 18},
        {id: 4, message: 'Where are you!', likesCount: 25}
    ],
    newPostText: ''
};


const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}


//Action creators

export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)


export default profileReducer;