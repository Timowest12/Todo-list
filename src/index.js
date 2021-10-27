
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
