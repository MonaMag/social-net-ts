import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo(props: any) {
  return (
      <div>
        <img src='https://www.thinkingbusinessblog.com/wp-content/uploads/2014/12/step-up-1000x430.jpg'/>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
  );
}

export default ProfileInfo;