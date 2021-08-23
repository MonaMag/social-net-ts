import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostPropsType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText: string) => void
}

type FormDataType = {
    newPostText: string
}

function MyPosts(props: MyPostsPropsType) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
        formData.newPostText = ''
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

//* AddPostForm component ---------------------------------------------------------->

const AddPostForm = reduxForm<FormDataType>({form: 'AddMyPost'})
((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPostText'} placeholder={'type your thoughts'}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
})

export default MyPosts;