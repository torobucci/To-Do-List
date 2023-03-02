export function setItems(toDoData) {
  const itemsJSON = JSON.stringify(toDoData);
  localStorage.setItem('To Do', itemsJSON);
}
export function getItems() {
  const items = localStorage.getItem('To Do') ? JSON.parse(localStorage.getItem('To Do')) : [];
  return items;
}