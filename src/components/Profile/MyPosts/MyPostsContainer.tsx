import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


/*type MyPostsPropsType = {
    store: StoreType
}*/

function MyPostsContainer() {

    return <StoreContext.Consumer>
        {
            store => {
                const state = store.getState();

                const addPost = () => {
                    if (state.profilePage.newPostText.trim() !== '') {
                        store.dispatch(addPostAC());
                    }
                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text));
                }
                return <MyPosts profilePage={state.profilePage}
                                addPost={addPost}
                                updateNewPostText={onPostChange}/>
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;