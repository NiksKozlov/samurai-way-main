import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import {RootStateType} from './redux/state';
import Friends from './components/Friends/Friends';


type PropsType = {
    state: RootStateType
    addPost: () => void
    changeNewPostText: (newPost: string) => void
}

const App: React.FC<PropsType> = (props) => {
    return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage} />} />
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               changeNewPostText={props.changeNewPostText}/>} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/friends" render={() => <Friends />} />
                </div>
            </div>
    );
}

export default App;
