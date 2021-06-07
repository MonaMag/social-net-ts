import React from 'react';
import {addPostAC, PostPropsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


type MapStatePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text:string) => void
}


 const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            if (newPostText.trim() !== '') {
                dispatch(addPostAC());
            }
        },
        updateNewPostText: (text:string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
