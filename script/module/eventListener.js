import changeLang from './changeLang.js';

let isShiftPush = false;

let isLeftShiftActive = false;
let isLeftAltActive = false;

const createKeysWhenShiftPush = () => {
  const { lang } = document.querySelector('body').dataset;
  const keys = document.querySelectorAll('.key');
  keys.forEach((k) => {
    k.querySelectorAll('span').forEach((elem) => {
      const spanContentClass = isShiftPush
        ? `${lang}-shift`
        : `${lang}-unshift`;
      if (elem.classList.contains(spanContentClass)) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
  });
};

const checkLang = () => {
  if (isLeftShiftActive && isLeftAltActive) {
    changeLang();
    createKeysWhenShiftPush();
  }
};

const keydown = (event) => {
  if (event.repeat) return;

  const keys = document.querySelectorAll('.key');
  const textAria = document.querySelector('.text-field');

  keys.forEach((k) => {
    if (k.dataset.code === event.code) {
      k.classList.add('key--active');
      if (k.dataset.code === 'Enter') {
        textAria.innerHTML += '&#13;';
      } else if (k.dataset.code === 'Backspace') {
        textAria.innerHTML = textAria.innerHTML.slice(0, -1);
      } else if (k.dataset.code === 'Tab') {
        event.preventDefault();
        textAria.innerHTML += ' &nbsp;';
      } else if (k.dataset.code === 'Space') {
        textAria.innerHTML += ' ';
      } else if (k.dataset.code === 'ShiftRigth') {
        isShiftPush = true;
        createKeysWhenShiftPush();
      } else if (k.dataset.code === 'ShiftLeft') {
        isLeftShiftActive = true;
        isShiftPush = true;
        createKeysWhenShiftPush();
        checkLang();
      } else if (k.dataset.code === 'AltLeft') {
        isLeftAltActive = true;
        checkLang();
      } else if (k.dataset.code === 'CapsLock') {
        if (!isShiftPush) {
          k.classList.add('key--active');
          isShiftPush = true;
          createKeysWhenShiftPush();
        } else {
          isShiftPush = false;
          createKeysWhenShiftPush();
        }
      } else if (
        k.dataset.code === 'ControlLeft' ||
        k.dataset.code === 'AltRight' ||
        k.dataset.code === 'ControlRight'
      ) {
        event.preventDefault();
      } else {
        k.querySelectorAll('span').forEach((elem) => {
          if (!elem.classList.contains('hidden'))
            textAria.innerHTML += elem.innerText;
        });
      }
    }
  });
};

const keyup = (event) => {
  if (event.repeat) return;

  const keys = document.querySelectorAll('.key');
  keys.forEach((k) => {
    if (k.dataset.code === event.code) {
      if (k.dataset.code === 'ShiftLeft' || k.dataset.code === 'ShiftRight') {
        isShiftPush = false;
        createKeysWhenShiftPush();
      } else if (k.dataset.code === 'ShiftLeft') {
        isLeftShiftActive = false;
      } else if (k.dataset.code === 'AltLeft') {
        isLeftAltActive = false;
      }
      k.classList.remove('key--active');
    }
  });
};

const onClickKey = (event) => {
  const textAria = document.querySelector('.text-field');
  const elCode = event.target.closest('div.key').dataset.code;
  if (elCode === 'Enter') {
    textAria.innerHTML += '&#13;';
  } else if (elCode === 'Backspace') {
    textAria.innerHTML = textAria.innerHTML.slice(0, -1);
  } else if (elCode === 'Tab') {
    textAria.innerHTML += ' &nbsp;';
  } else if (elCode === 'Space') {
    textAria.innerHTML += ' ';
  } else if (
    elCode === 'ControlLeft' ||
    elCode === 'AltRight' ||
    elCode === 'ControlRight'
  ) {
    event.target.closest('div.key').preventDefault();
  } else if (elCode === 'ShiftLeft' || elCode === 'ShiftRight') {
    if (!isShiftPush) {
      event.target.closest('div.key').classList.add('key--active');
      isShiftPush = true;
      createKeysWhenShiftPush();
    } else {
      event.target.closest('div.key').classList.remove('key--active');
      isShiftPush = false;
      createKeysWhenShiftPush();
    }
  } else {
    event.target
      .closest('div.key')
      .querySelectorAll('span')
      .forEach((elem) => {
        if (!elem.classList.contains('hidden'))
          textAria.innerHTML += elem.innerText;
      });
  }
};

export { keydown, keyup, onClickKey };
