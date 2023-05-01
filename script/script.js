import init from './module/init.js';
import createKeyBoard from './module/createKeyBoard.js';
import { keydown, keyup, onClickKey } from './module/eventListener.js';

const options = {
  lang: 'eng',
  shift: false,
};

init();

document.addEventListener('load', createKeyBoard());
document.addEventListener('keydown', (event) => keydown(event));
document.addEventListener('keyup', (event) => keyup(event));
document
  .querySelector('.keybord-container')
  .addEventListener('click', (event) => onClickKey(event));
document
  .querySelector('.text-field')
  .addEventListener('focus', (event) => event.preventDefault);
