let isUpperCase = false;

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
        k.dataset.code === 'ShiftLeft'
        || k.dataset.code === 'ShiftRigth'
      ) {
        isUpperCase = true;
      } else {
        textAria.innerHTML += isUpperCase
          ? k.querySelector('span').innerText.toUpperCase()
          : k.querySelector('span').innerText;
      }
    }
  });
};

const keyup = (event) => {
  if (event.repeat) return;

  const keys = document.querySelectorAll('.key');
  keys.forEach((k) => {
    if (k.dataset.code === event.code) {
      if (k.dataset.code === 'ShiftLeft' || k.dataset.code === 'ShiftRigth') {
        isUpperCase = false;
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
  } else if (elCode === 'ShiftLeft' || elCode === 'ShiftRigth') {
    isUpperCase = true;
  } else {
    textAria.innerHTML += isUpperCase
      ? event.target
        .closest('div')
        .querySelector('span')
        .innerText.toUpperCase()
      : event.target.closest('div').querySelector('span').innerText;
  }
};

export { keydown, keyup, onClickKey };
