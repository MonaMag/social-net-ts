import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props: any) {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                <Post message="Hi, how are you?" countingLikes={15}/>
                <Post message="It's my first post?" countingLikes={20}/>
            </div>

        </div>


    );
}

export default MyPosts;