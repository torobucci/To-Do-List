import './style.css'
function component() {
    const element = document.createElement('div');
    const p = document.createElement('p')
    p.textContent="Hello Bucci!"
    element.appendChild(p)
    element.style.color='red'
    return element;
  }
  
  document.body.appendChild(component());