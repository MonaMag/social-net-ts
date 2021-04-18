import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type PostPropsType = {
    message: string
    likesCount: number
    id: number
}

let posts: Array<PostPropsType> = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'How are you?!', likesCount: 20},
    {id: 3, message: 'Hi, my dear!', likesCount: 18},
    {id: 4, message: 'Where are you!', likesCount: 25}
]


export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    id: number
    message: string
}


    const dialogs: Array<DialogItemPropsType> = [
    {id: 1, name: 'Hanna'},
    {id: 2, name: 'Kira'},
    {id: 3, name: 'Tim'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Anna'},
    {id: 6, name: 'Ali'}
]

const messages: Array<MessagePropsType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?!'},
    {id: 3, message: 'Hi, my dear!'},
    {id: 4, message: 'Where are you?'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
