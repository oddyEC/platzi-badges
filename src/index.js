// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import Badge from './components/Badge'

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
ReactDOM.render(<Badge/>, container);
