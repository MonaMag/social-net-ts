import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostPropsType>
}

function MyPosts(props: PropsType) {
    let postsElements =
        props.posts.map( p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;