import React, {ChangeEvent, useState} from 'react';


type ProfileStatusType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return <div >
        {editMode &&
        <div>
            <input
                onChange={onStatusChange}
                type="text"
                autoFocus={true}
                onBlur={deactivateEditMode}
                placeholder='print your status'/>
        </div>
        }
        {!editMode &&
        <div>
                 <span onDoubleClick={activateEditMode }>
                     {props.status || 'enter your status'}
                 </span>
        </div>
        }
    </div>
}
