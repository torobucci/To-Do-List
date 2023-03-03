export const ul2 = document.querySelector('.ul-2');
export function displayList(toDoData) {
  ul2.innerHTML = '';
  toDoData.forEach((data, i) => {
    data.id = i + 1;
    const li = document.createElement('li');
    li.className = 'added';
    ul2.appendChild(li);
    const p = document.createElement('p');
    li.appendChild(p);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.className = 'checkbox';
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
    /* if(data.completed){
        checkbox.setAttribute('checked','checked')
    } */
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