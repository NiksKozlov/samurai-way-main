import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Navbar} from './components/Navbar/Navbar';
import {Users} from './components/Users/Users';
import {UsersContainer} from './components/Users/UsersContainer';


type AppPropsType = {}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/profile' render={() => <Profile />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/friends' render={() => <Friends />} />
            </div>
        </div>
    );
}

export default App;
