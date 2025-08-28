import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> React Element - JS Object ==> HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React tuka "
// );

// const root = ReactDOM.createRoot(document.getElementById("root")); // convert to html and

// root.render(heading);

// console.log(heading);
// JSX - is not HTML In JS ..but we call HTML-Like or XML Like syntax

// JSX (transpiled before it reaches the JS Engine) - Transpilation done by PARCEL - PARCEL GIVE IT TO BABEL

// JSX => Babel transpiles it to :-  React.createElement ==> React Element - JS Object ==> HTMLElement(render)

// const jsxHeading = (
//   <h1 className="root" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );

// React Element
const heading = (
  <h1 className="root" tabIndex="1">
    Namaste React using JSX
  </h1>
);

// React Componets
// class based componets  - old -not used today ..only in legacy projects ..uses JS Classes
// functional based componets  - NEW - uses javascript functions to build compoents

// React functional compoents - is just a normal javascript functions which retuns some peice of jsx / jsx element
// Make it first letter as a capital otherwise we will get error

// React functional compoents

// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React functional Componets</h1>;
// };

// I want to render this title compeoents inside the id container

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

// shorthand or arrow function
// /* compeoents compostion */ title is inside of heading  component

// Compeoents compostion

const number = 10000;

// const data = api.getData();

// we cant put any type JS code inside {}
const HeadingComponent = () => (
  <div id="container">
    <h2> {number} </h2>
    <Title />
    {Title()}
    {/* <Title></Title>  same as above */}
    <h1 className="heading">Namaste React functional compoents</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

//
