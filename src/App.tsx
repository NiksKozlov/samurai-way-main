import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";
import {MessagesType} from "./components/Dialogs/Message/Message";


type PropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}

const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route path="/profile" render={() => <Profile posts={props.posts} />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
