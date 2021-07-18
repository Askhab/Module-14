import "../css/button.css";

export function addButton() {
  const button = document.createElement('button');
  button.classList.add('clickMe');
  button.textContent = `0 кликов`;

  return button;
}