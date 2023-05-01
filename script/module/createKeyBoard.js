import eventListener from './eventListener.js';
import keys from '../keys.js';

const createKeyBoard = () => {
  const keyboardField = document.querySelector('.keybord-container');

  const htmlKeys = keys.map(key => { return `<div class='key ${key.code}'><span>${key.key}</span></div>`}).join(" ");

  keyboardField.insertAdjacentHTML('afterbegin',htmlKeys)

  console.log('hi from keyboard');
  console.log(keys)
  eventListener();
};
export default createKeyBoard;
