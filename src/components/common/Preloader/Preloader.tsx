import React from "react";
import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/preloader.gif";

type PreloaderPropsType= {

}


const Preloader = (props: any) => {
    return <div>
        <img src={preloader} className={s.loader}/>
    </div>

}

export default Preloader;