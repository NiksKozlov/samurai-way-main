import React from 'react';
import {changeNewMessageTextAC, InitialStateType, sendMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


// export type DialogsContainerPropsType = {}
//
//
// export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//
//                 const changeNewMessageText = (newText: string) => {
//                     store.dispatch(changeNewMessageTextAC(newText))
//                 }
//
//                 return <Dialogs dialogsPage={store.getState().dialogsPage}
//                                 changeNewMessageText={changeNewMessageText}
//                                 sendMessage={sendMessage} />
//             }}
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchPropsType = {
    changeNewMessageText: (newText: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        changeNewMessageText: (newText: string) => {
            dispatch(changeNewMessageTextAC(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)