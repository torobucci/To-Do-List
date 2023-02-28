import './style.css';

const li = document.querySelector('.last');
const listData = [{ description: 'Wake up at 7:00am', completed: false, index: 0 },
  { description: 'Work out and shower', completed: false, index: 1 },
  { description: 'Take breakfast', completed: false, index: 2 },
  { description: 'Meditation', completed: false, index: 3 },
];
function populateData() {
  listData.forEach((data) => {
    li.insertAdjacentHTML('beforebegin', `<li><p><input type="checkbox" id="checkbox">${data.description}</p><i class="fa-solid fa-ellipsis-vertical"></i></li>`);
  });
}
populateData();