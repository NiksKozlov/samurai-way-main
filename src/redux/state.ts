type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: string
}

type RootStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    posts: Array<PostType>
}

let state: RootStateType = {
    dialogs: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alina"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Sergei"}
    ],

    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "What's up!"},
        {id: 5, message: "Yo"}
    ],

    posts: [
        {id: 1, message: "Hi! How are you?", likesCount: "15"},
        {id: 2, message: "It's my first post!!!", likesCount: "20"},
    ]
}

export default state;