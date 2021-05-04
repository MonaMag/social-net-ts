import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

function MyPosts(props: PropsType) {

    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;