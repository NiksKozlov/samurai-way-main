import state, {subscribe} from './redux/state';
import {addPost, changeNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const renderTree = () => {
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

renderTree()

subscribe(renderTree)