export default function isChecked(toDoData) {
  toDoData.forEach((data, i) => {
    if (data.completed) {
      document.querySelectorAll('.checkbox')[i].setAttribute('checked', 'checked');
    }
  });
}