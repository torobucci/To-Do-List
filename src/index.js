import './style.css';

const addToDo = document.querySelector('.addToDo');
const ul2 = document.querySelector('.ul-2');
function getItems() {
  const items = localStorage.getItem('To Do') ? JSON.parse(localStorage.getItem('To Do')) : [];
  return items;
}
let toDoData = getItems(); // used let as the value would be changed.

function setItems() {
  const itemsJSON = JSON.stringify(toDoData);
  localStorage.setItem('To Do', itemsJSON);
}

function displayList() {
  ul2.innerHTML = '';
  toDoData.forEach((data, i) => {
    data.id = i;
    const li = document.createElement('li');
    li.className = 'added';
    ul2.appendChild(li);
    const p = document.createElement('p');
    li.appendChild(p);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    p.appendChild(checkbox);
    const textContent = document.createElement('input');
    textContent.className = 'input-text';
    textContent.type = 'text';
    textContent.value = data.description;
    textContent.setAttribute('readonly', 'readonly');
    p.appendChild(textContent);
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-ellipsis-vertical';
    li.appendChild(icon);
  });
  if (document.querySelectorAll('.added')) {
    const added = document.querySelectorAll('.added');

    added.forEach((el) => {
      el.addEventListener('mouseover', () => {
        el.classList.toggle('hover-list');
        el.children[1].classList.toggle('fa-ellipsis-vertical');
        el.children[1].classList.toggle('fa-trash-can');
      });
      el.addEventListener('mouseout', () => {
        el.classList.toggle('hover-list');
        el.children[1].classList.toggle('fa-trash-can');
        el.children[1].classList.toggle('fa-ellipsis-vertical');
      });
    });
  }
}
addToDo.addEventListener('change', () => {
  if (addToDo.value) {
    const obj = { description: addToDo.value, completed: false };
    toDoData.push(obj);
    addToDo.value = '';
    displayList();
    setItems();
  }
});
function removeItem(item) {
  toDoData = toDoData.filter((data) => data.id !== item);
  displayList();
  setItems();
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
        setItems();
        displayList();
      }
    });
  }
  if (event.target.classList.contains('fa-trash-can')) {
    const parent = event.target.parentElement;
    const added = document.querySelectorAll('.added');
    const itemKey = [...added].indexOf(parent);
    removeItem(itemKey);
  }
});

displayList();
