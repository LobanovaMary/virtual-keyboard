import keys from '../keys.js';

const createKeyBoard = () => {
  const keyboardField = document.querySelector('.keybord-container');

  const htmlKeys = keys
    .map(
      (key) => `<div class='key ${key.class}' data-code='${key.code}'>
    <span class="eng">${key.keyEng}</span>
    <span class="eng-shift eng hidden">${key.keyEngShift}</span>
    <span class="rus hidden">${key.keyRus}</span>
    <span class="rus-shift rus hidden">${key.keyRusShift}</span>
    </div>`
    )
    .join(' ');

  keyboardField.insertAdjacentHTML('afterbegin', htmlKeys);
};

export default createKeyBoard;
