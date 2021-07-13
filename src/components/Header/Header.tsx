import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img
                src='https://camo.githubusercontent.com/d425a598a348014050fa0e9bb9b09b820795df5c89bb7131abad448f87ff1491/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f636f6465727372616e6b2e737667'/>
            <div className={s.login}>
                {props.isAuth ?
                    <div>{props.login} | {props.email}</div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;