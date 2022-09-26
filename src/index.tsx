import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import store, {RootStateType} from './redux/state';

const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost}
                changeNewPostText={store.changeNewPostText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree)