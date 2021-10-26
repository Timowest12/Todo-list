/* //import _ from 'lodash';
import printMe from './print.js';
import './style.css'; */
import './style.css';

const listoutput = document.querySelector('.todolist');
const listobj = [
  { description: 'Wash the dishes', completed: false, index: 0 },
  { description: 'Complete todo list', completed: false, index: 1 },
];
const outputlist = listobj.forEach((task) => {
  listoutput.innerHTML += `<li class='lstitem'><input type='checkbox' value='${task.index}'> ${task.description}</li>`;
});
outputlist();
/*  function component() {

   const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component()); */
