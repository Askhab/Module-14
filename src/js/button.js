import styles from '../css/button.css';

export function addButton() {
  const button = document.createElement('button');
  button.classList.add(styles.clickMe);
  button.innerHTML = `0 кликов`;

  return button;
}