import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, addPostAC, changeNewTextAC, PostPropsType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    /*addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action:ActionsType) => void
}

function MyPosts(props: PropsType) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
       // props.dispatch({type: "ADD-POST", postMessage: props.newPostText});
    }

    const onPostChange = () => {
        let text = newPostElement?.current?.value
        props.dispatch(changeNewTextAC(text || ''))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText}/></div>
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