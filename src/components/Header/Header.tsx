import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logo.svg';


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src={logo}/>
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