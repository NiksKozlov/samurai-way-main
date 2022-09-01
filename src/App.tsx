import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {MessagesType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";



type AppPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route path="/profile" render={() => <Profile posts={props.posts} />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
