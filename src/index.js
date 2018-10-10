import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";

// Devtools stuff
import { ReactEmitter } from "kuker-emitters";
const { registerObserver } = require("react-perf-devtool");
ReactEmitter();
window.observer = registerObserver();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
