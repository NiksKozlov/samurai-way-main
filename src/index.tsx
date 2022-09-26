import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/state';

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                changeNewPostText={store.changeNewPostText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)