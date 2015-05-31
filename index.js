var state = {
  items: []
};
var ls = localStorage.getItem('tasks');
if (ls) {
  state = JSON.parse(ls);
}

window.addEventListener('load', function main1() {
  'use strict';
  var buttonField = document.querySelector('button');
  var inputField = document.querySelector('input');
  var ulField = document.querySelector('ul');

  function update() {
    var i;
    var liField;
    ulField.innerHTML = '';
    state.items.sort();
    for ( i = 0; i < state.items.length; i++) {
      liField = document.createElement('li');
      liField.innerText = state.items[i];
      ulField.appendChild(liField);
    }
  }
  update();
  function clicker() {
    var task = inputField.value;
    if (task !== '') {
      state.items.push(task);
      update();
      localStorage.setItem('tasks', JSON.stringify(state));
      inputField.value = '';
    }
  }
  buttonField.addEventListener('click', clicker);
  inputField.addEventListener('keydown', function enterKey(event) {
    if (event.keyCode === 13) {
      clicker();
    }
  } );
});
