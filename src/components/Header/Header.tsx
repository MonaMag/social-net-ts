import React from 'react';
import s from './Header.module.css';

function Header(props:any) {
  return (
      <header className={s.header}>
        <img
            src='https://camo.githubusercontent.com/d425a598a348014050fa0e9bb9b09b820795df5c89bb7131abad448f87ff1491/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f636f6465727372616e6b2e737667'/>
      </header>
  );
}

export default Header;