import React from 'react';
import {Textarea} from "../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required, textAreaMaxLengthValidate} from "../../utils/validators/validators";

export type FormDataType = {
    newPostText: string
}

//* AddNewPostForm component ---------------------------------------------------------->

export const AddNewPostForm = reduxForm<FormDataType>({form: 'AddMyPost'})
((props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   validate={[required, textAreaMaxLengthValidate]}
                   name={'newPostText'}
                   placeholder={'type your thoughts'}

            />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
})

