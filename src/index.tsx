import state from './redux/state';
import {addPost, changeNewPostText, RootStateType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewPostText={changeNewPostText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}


renderTree(state)