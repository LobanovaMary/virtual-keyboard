let isShiftPush = false;

const createKeysWhenShiftPush = () => {
  const lang = document.querySelector('body').dataset.lang;
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
// const createKeysWhenShiftUp = () => {
//   const lang = document.querySelector('body').dataset.lang;
//   const keys = document.querySelectorAll('.key');
//   keys.forEach((k) => {
//     k.querySelectorAll('span').forEach((elem) => {
//       if (elem.classList.contains(`${lang}-unshift`)) {
//         elem.classList.remove('hidden');
//       } else {
//         elem.classList.add('hidden');
//       }
//     });
//   });
// };

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
      } else if (
        k.dataset.code === 'ShiftLeft' ||
        k.dataset.code === 'ShiftRigth'
      ) {
        isShiftPush = true;
        createKeysWhenShiftPush();
      } else if (k.dataset.code === 'CapsLock') {
        if (!isShiftPush) {
          k.classList.add('key--active');
          isShiftPush = true;
          createKeysWhenShiftPush();
        } else {
          isShiftPush = false;  
          createKeysWhenShiftPush();
        }
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
      }
      k.classList.remove('key--active');
    }
  });
};

const onClickKey = (event) => {
  const textAria = document.querySelector('.text-field');
  const elCode = event.target.closest('div').dataset.code;
  if (elCode === 'Enter') {
    textAria.innerHTML += '&#13;';
  } else if (elCode === 'Backspace') {
    textAria.innerHTML = textAria.innerHTML.slice(0, -1);
  } else if (elCode === 'Tab') {
    textAria.innerHTML += ' &nbsp;';
  } else if (elCode === 'Space') {
    textAria.innerHTML += ' ';
  } else if (elCode === 'ShiftLeft' || elCode === 'ShiftRight') {
    if (!isShiftPush) {
      event.target.closest('div').classList.add('key--active');
      isShiftPush = true;
      createKeysWhenShiftPush();
    } else {
      event.target.closest('div').classList.remove('key--active');
      isShiftPush = false;
      createKeysWhenShiftPush();
    }
  } else {
    event.target.querySelectorAll('span').forEach((elem) => {
      if (!elem.classList.contains('hidden'))
        textAria.innerHTML += elem.innerText;
    });
  }
};

export { keydown, keyup, onClickKey };
