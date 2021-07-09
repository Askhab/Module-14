import styles from '../css/button.css';



export function addButton() {
  const button = document.createElement('button');
  
  button.innerText = 0 + " клик";

  return button;
}

// let count = 0;
// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   count += 1;
//   button.innerHTML = `${count} клик`;
// });
  
