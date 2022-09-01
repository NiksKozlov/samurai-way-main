import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let dialogs = [
    {id: 1, name: "Nikita"},
    {id: 2, name: "Alina"},
    {id: 3, name: "Mark"},
    {id: 4, name: "Pavel"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Sergei"}
]

let messages = [
    {id: 1, userMessage: "Hi"},
    {id: 2, userMessage: "How are you?"},
    {id: 3, userMessage: "Yo"},
    {id: 4, userMessage: "What's up!"},
    {id: 5, userMessage: "Yo"}
]

let posts = [
    {id: 1, message: "Hi! How are you?", likesCount: "15"},
    {id: 2, message: "It's my first post!!!", likesCount: "20"},
]




ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById("root")
);