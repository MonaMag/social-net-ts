import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, addPostAC, changeNewTextAC, ProfilePageType} from "../../../redux/state";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    /*newPostText: string*/
    /*addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action:ActionsType) => void
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements =
        props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    //let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(props.profilePage.newPostText.trim() !== '') {
            props.dispatch(addPostAC(props.profilePage.newPostText));
        }
       // props.dispatch(addPostAC(props.newPostText));
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={ onPostChange } value={props.profilePage.newPostText}/></div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;