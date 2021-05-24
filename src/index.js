// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

// const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Hola soy los children"
// );
// const name = 'Daniela'
// const jsx = <h1>Hola soy, {null}</h1>
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola, soy ${name}`
// )

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Diego"
    lastName="Marquez"
    avatarURL="https://s.gravatar.com/avatar/6ff72d2b26549147831dae808bf78e81?s=80"
    jobTitle="Frontend Engineer"
    twitter="diego_marquezEC"
  />,
  container
);
