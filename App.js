import React from "react";
import ReactDOM from "react-dom/client";

// like below we create nested element in react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste react"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

// JSX = to avoid this bulky code USE  jsx

console.log(parent);

// ReactElement = object

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyx: "abc" },
//   "Hello World from React"
// );
// create a root to put all dom inside that
// creating a root and rendering dom inside that is job of React DOM

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
