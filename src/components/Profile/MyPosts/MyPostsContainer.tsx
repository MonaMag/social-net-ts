import React from 'react';
import {addPostAC, PostPropsType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


type MapStatePropsType = {
    posts: Array<PostPropsType>
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}


 const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost: addPostAC})(MyPosts)
export default MyPostsContainer;
