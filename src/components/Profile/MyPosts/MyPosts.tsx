import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostPropsType} from "../../../redux/profile-reducer";
import {AddNewPostForm, FormDataType} from "../../AddMessageForm/AddMessageForm";


//*types --------------------------------------------------------------------->
type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText: string) => void
}



//* MyPost component ---------------------------------------------------------->
const MyPosts = React.memo((props: MyPostsPropsType) => {
    console.log('RENDER YU');
    const postsElements = props.posts
        .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
        //formData.newPostText = ''
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;