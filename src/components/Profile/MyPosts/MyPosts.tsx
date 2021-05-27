import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostPropsType} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void

}

function MyPosts(props: MyPostsPropsType) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        if(props.newPostText.trim() !== '') {
            props.addPost(props.newPostText);
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={ onPostChange } value={props.newPostText}/></div>
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