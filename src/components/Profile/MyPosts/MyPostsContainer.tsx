import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import store, {StoreType} from "../../../redux/redux-store";


type MyPostsPropsType = {
    store: StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {

    const addPost = () => {
        if (props.store.getState().profilePage.newPostText.trim() !== '') {
            props.store.dispatch(addPostAC());
        }
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }

    return (<MyPosts profilePage={store.getState().profilePage}
                     addPost={addPost}
                     updateNewPostText={onPostChange}/>)
}

export default MyPostsContainer;