import React from 'react';
import s from './Post.module.css';
import {PostPropsType} from "../../../../redux/store";


function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7TRTvspdse0xZ8rttWKwKYKzjMnsMi7dXpJr6EdyHRwRJqRsog_fY1EoCiLJBo6vejA&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>

        </div>

    );
}

export default Post;