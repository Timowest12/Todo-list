/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addandremove.js":
/*!*****************************!*\
  !*** ./src/addandremove.js ***!
  \*****************************/
/***/ (() => {

eval("function checkboxupdate() {\n  const checkboxes = document.querySelectorAll('input[name=mycheckboxes]');\n  checkboxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', () => {\n      const storedtodos = JSON.parse(localStorage.getItem('todos'));\n      storedtodos[checkbox.parentElement.dataset.ind].done = checkbox.checked;\n      localStorage.setItem('todos', JSON.stringify(storedtodos));\n    });\n  });\n}\n\nif (localStorage.getItem('todos') != null) {\n  // alert('set');\n}\nconst inp = document.querySelector('.listinp');\nconst tasksoutput = document.querySelector('.tasksoutput');\nconst bottombar = document.querySelector('.bottombar');\n\nfunction outputlist() {\n  tasksoutput.innerHTML = '';\n  const tasks = [];\n  if (localStorage.getItem('todos') != null) {\n    const storedtodos = JSON.parse(localStorage.getItem('todos'));\n    storedtodos.forEach((item) => {\n      tasks.push(item);\n    });\n  }\n  tasks.forEach((item, index) => {\n    tasksoutput.innerHTML += `<li data-ind='${index}' contentEditable='false' class='lstitem'><input ='checkbox' ${item.done === true ? 'checked' : 'unchecked'} name=mycheckboxes type='checkbox' value='${index}'> <span class='tasktxt'>${item.item}</span><span class='optionicon'><i class='material-icons'>more_vert</i></span></li>`;\n    txtenter();// eslint-disable-line\n  });\n\n  // add event listeners to option buttons\n  document.querySelectorAll('.optionicon').forEach((item) => {\n    item.addEventListener('click', () => {\n      item.innerHTML = \"<i class='deletebtn material-icons'>delete</i>\";\n      deletebtn();// eslint-disable-line\n      item.parentElement.style.backgroundColor = '#d9d7d2';\n      const txttowriteto = item.parentElement.querySelector('.tasktxt');\n      txttowriteto.setAttribute('contentEditable', 'true');\n      const selection = window.getSelection();\n      const range = document.createRange();\n      selection.removeAllRanges();\n      range.selectNodeContents(txttowriteto);\n      range.collapse(false);\n      selection.addRange(range);\n      txttowriteto.focus();\n      // document.body.style.cursor = item.parentElement.querySelector('.tasktxt');\n    });\n  });\n  checkboxupdate();\n}\n\nfunction removesingle(indd) {\n  const storedtodos = JSON.parse(localStorage.getItem('todos'));\n  storedtodos.splice(indd, 1);\n  localStorage.setItem('todos', JSON.stringify(storedtodos));\n  outputlist();\n}\n\nfunction addtask(item) {\n  const tasks = [];\n  if (localStorage.getItem('todos') != null) {\n    const storedtodos = JSON.parse(localStorage.getItem('todos'));\n    storedtodos.forEach((item) => {\n      tasks.push(item);\n    });\n  }\n  tasks.push({ item, done: false, something: 'something' });\n  localStorage.setItem('todos', JSON.stringify(tasks));\n}\nfunction txtenter() {\n  document.querySelectorAll('.tasktxt').forEach((tasktxt) => tasktxt.addEventListener('keypress', (event) => {\n    if (event.which === 13) {\n      event.preventDefault();\n      tasktxt.setAttribute('contentEditable', 'false');\n      outputlist();\n    }\n    // alert(tasktxt.parentElement.dataset.ind)\n    const storedtodos = JSON.parse(localStorage.getItem('todos'));\n    storedtodos[tasktxt.parentElement.dataset.ind].item = tasktxt.innerHTML;\n    localStorage.setItem('todos', JSON.stringify(storedtodos));\n    if (tasktxt.innerHTML[tasktxt.innerHTML.length - 1] === '>') {\n      tasktxt.setAttribute('contentEditable', 'false');\n      event.preventDefault();\n      outputlist();\n    }\n  }));\n}\n\nfunction deletebtn() {\n  document.querySelectorAll('.deletebtn').forEach((delbtn) => {\n    delbtn.addEventListener('click', (event) => removesingle(delbtn.parentElement.parentElement.dataset.ind));// eslint-disable-line\n  });\n}\n\nfunction removefromlist() {\n  let storedtodos = JSON.parse(localStorage.getItem('todos'));\n  storedtodos = storedtodos.filter((todo) => todo.done !== true);\n  localStorage.setItem('todos', JSON.stringify(storedtodos));\n  outputlist();\n  /*  const checkedBoxes = document.querySelectorAll(\n    'input[name=mycheckboxes]:checked',\n  );\n  //alert(checkedBoxes.length);\n  checkedBoxes.forEach((value) => {\n      //alert(value.value)\n    tasks.splice(value.value, 1);\n    localStorage.setItem('todos', JSON.stringify(tasks));\n  });\n  // tasks.splice(0,1);\n  outputlist();\n} */\n}\n\nbottombar.addEventListener('click', removefromlist);\n\noutputlist();\ninp.addEventListener('keyup', function (event) {\n  if (event.keyCode === 13) {\n    // alert(this.value);\n    addtask(this.value);\n    this.value = '';\n  }\n  outputlist();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/addandremove.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/addandremove.js"]();
/******/ 	
/******/ })()
;