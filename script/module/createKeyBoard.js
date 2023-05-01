import keys from '../keys.js';

const createKeyBoard = () => {
  const keyboardField = document.querySelector('.keybord-container');

  const htmlKeys = keys
    .map((key) => `<div class='key ${key.class}' data-code='${key.code}'><span>${key.key}</span></div>`)
    .join(' ');

  keyboardField.insertAdjacentHTML('afterbegin', htmlKeys);
};

export default createKeyBoard;
