import React from 'react';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Redirect} from "react-router-dom";

type SettingsPropsType = {
    value: boolean
}
function Settings(props: SettingsPropsType) {
    if (!props.value) {
        return  <Redirect to={'/login'}/>;
    }
  return (
      <div>
          {props.value}
        Settings
      </div>
  );
}


export default withAuthRedirect(Settings);