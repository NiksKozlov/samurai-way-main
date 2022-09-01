import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let posts = [
    {id: 1, message: "Hi! How are you?", likesCount: "15"},
    {id: 2, message: "It's my first post!!!", likesCount: "20"},
]




ReactDOM.render(
    <App />,
  document.getElementById("root")
);