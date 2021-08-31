import profileReducer, {
    addPostAC,
    deletePost,
    PostPropsType,
    ProfileStateType,
    UserProfileType
} from "./profile-reducer";


let startState: ProfileStateType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'It\'s my first post', likesCount: 66},
            {id: 2, message: 'It\'s my second post', likesCount: 22},
            {id: 3, message: 'How are you doing?', likesCount: 11},
            {id: 4, message: 'I\'m absolutely fine!', likesCount: 6},
        ] as PostPropsType[],
        profile: null as null | UserProfileType,
        status: ''
    }
})

test('post should be added', () => {

    let newPostText = 'new post added'

    let endState = profileReducer(startState, addPostAC(newPostText))

    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe(newPostText)
    expect(endState.posts[0].likesCount).toBe(66)
})

test('post should be deleted', () => {
    let endState = profileReducer(startState, deletePost(1))

    expect(endState.posts.length).toBe(3)
})
