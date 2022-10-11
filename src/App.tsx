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
import {ActionTypes, RootStateType} from './redux/store';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type PropsType = {
    state: RootStateType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer state={props.state.dialogsPage}
                                              dispatch={props.dispatch} />} />
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch} />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/friends" render={() => <Friends />} />
            </div>
        </div>
    );
}

export default App;
