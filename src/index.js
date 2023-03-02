import './style.css';
import { ul2, displayList } from './displayList.js';
import { setItems, getItems } from './localStorage.js';

const addToDo = document.querySelector('.addToDo');
let toDoData = getItems(); // used let as the value would be changed.
addToDo.addEventListener('change', () => {
  if (addToDo.value) {
    const obj = { description: addToDo.value, completed: false };
    toDoData.push(obj);
    addToDo.value = '';
    displayList(toDoData);
    setItems(toDoData);
  }
});
function removeItem(item) {
  toDoData = toDoData.filter((data) => data.id !== item);
  displayList(toDoData);
  setItems(toDoData);
}
ul2.addEventListener('click', (event) => {
  if (event.target.classList.contains('input-text')) {
    const input = event.target;
    const originalText = input.value;
    const itemKey = event.target.value;
    input.removeAttribute('readonly', 'readonly');
    input.focus();
    input.addEventListener('change', () => {
      if (input.value === '') {
        input.value = originalText;
      } else {
        const oldData = toDoData.filter((data) => data.description === itemKey);
        oldData[0].description = input.value;
        setItems(toDoData);
        displayList(toDoData);
      }
    });
  }
  if (event.target.classList.contains('fa-trash-can')) {
    const parent = event.target.parentElement;
    const added = document.querySelectorAll('.added');
    const itemKey = [...added].indexOf(parent) + 1;
    removeItem(itemKey);
  }
});
displayList(toDoData);
