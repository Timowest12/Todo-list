function checkboxupdate() {
  const checkboxes = document.querySelectorAll('input[name=mycheckboxes]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const storedtodos = JSON.parse(localStorage.getItem('todos'));
      storedtodos[checkbox.parentElement.dataset.ind].done = checkbox.checked;
      localStorage.setItem('todos', JSON.stringify(storedtodos));
    });
  });
}

if (localStorage.getItem('todos') != null) {
  // alert('set');
}
const inp = document.querySelector('.listinp');
const tasksoutput = document.querySelector('.tasksoutput');
const bottombar = document.querySelector('.bottombar');

function outputlist() {
  tasksoutput.innerHTML = '';
  const tasks = [];
  if (localStorage.getItem('todos') != null) {
    const storedtodos = JSON.parse(localStorage.getItem('todos'));
    storedtodos.forEach((item) => {
      tasks.push(item);
    });
  }
  tasks.forEach((item, index) => {
    tasksoutput.innerHTML += `<li data-ind='${index}' contentEditable='false' class='lstitem'><input ='checkbox' ${item.done === true ? 'checked' : 'unchecked'} name=mycheckboxes type='checkbox' value='${index}'> <span class='tasktxt'>${item.item}</span><span class='optionicon'><i class='material-icons'>more_vert</i></span></li>`;
    txtenter();// eslint-disable-line
  });

  // add event listeners to option buttons
  document.querySelectorAll('.optionicon').forEach((item) => {
    item.addEventListener('click', () => {
      item.innerHTML = "<i class='deletebtn material-icons'>delete</i>";
      deletebtn();// eslint-disable-line
      item.parentElement.style.backgroundColor = '#d9d7d2';
      const txttowriteto = item.parentElement.querySelector('.tasktxt');
      txttowriteto.setAttribute('contentEditable', 'true');
      const selection = window.getSelection();
      const range = document.createRange();
      selection.removeAllRanges();
      range.selectNodeContents(txttowriteto);
      range.collapse(false);
      selection.addRange(range);
      txttowriteto.focus();
      // document.body.style.cursor = item.parentElement.querySelector('.tasktxt');
    });
  });
  checkboxupdate();
}

function removesingle(indd) {
  const storedtodos = JSON.parse(localStorage.getItem('todos'));
  storedtodos.splice(indd, 1);
  localStorage.setItem('todos', JSON.stringify(storedtodos));
  outputlist();
}

function addtask(item) {
  const tasks = [];
  if (localStorage.getItem('todos') != null) {
    const storedtodos = JSON.parse(localStorage.getItem('todos'));
    storedtodos.forEach((item) => {
      tasks.push(item);
    });
  }
  tasks.push({ item, done: false, something: 'something' });
  localStorage.setItem('todos', JSON.stringify(tasks));
}
function txtenter() {
  document.querySelectorAll('.tasktxt').forEach((tasktxt) => tasktxt.addEventListener('keypress', (event) => {
    if (event.which === 13) {
      event.preventDefault();
      tasktxt.setAttribute('contentEditable', 'false');
      outputlist();
    }
    // alert(tasktxt.parentElement.dataset.ind)
    const storedtodos = JSON.parse(localStorage.getItem('todos'));
    storedtodos[tasktxt.parentElement.dataset.ind].item = tasktxt.innerHTML;
    localStorage.setItem('todos', JSON.stringify(storedtodos));
    if (tasktxt.innerHTML[tasktxt.innerHTML.length - 1] === '>') {
      tasktxt.setAttribute('contentEditable', 'false');
      event.preventDefault();
      outputlist();
    }
  }));
}

function deletebtn() {
  document.querySelectorAll('.deletebtn').forEach((delbtn) => {
    delbtn.addEventListener('click', (event) => removesingle(delbtn.parentElement.parentElement.dataset.ind));// eslint-disable-line
  });
}

function removefromlist() {
  let storedtodos = JSON.parse(localStorage.getItem('todos'));
  storedtodos = storedtodos.filter((todo) => todo.done !== true);
  localStorage.setItem('todos', JSON.stringify(storedtodos));
  outputlist();
  /*  const checkedBoxes = document.querySelectorAll(
    'input[name=mycheckboxes]:checked',
  );
  //alert(checkedBoxes.length);
  checkedBoxes.forEach((value) => {
      //alert(value.value)
    tasks.splice(value.value, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
  });
  // tasks.splice(0,1);
  outputlist();
} */
}

bottombar.addEventListener('click', removefromlist);

outputlist();
inp.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    // alert(this.value);
    addtask(this.value);
    this.value = '';
  }
  outputlist();
});
