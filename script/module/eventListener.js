const keydown = (event) => {
  if (event.repeat) return;

  const keys = document.querySelectorAll('.key');
  const textAria = document.querySelector('.text-field');

  keys.forEach((k) => {
    if (k.dataset.code === event.code) {
      k.classList.add('key--active');
      textAria.innerHTML += k.querySelector('span').innerText;
    }
  });
};

const keyup = (event) => {
  if (event.repeat) return;

  const keys = document.querySelectorAll('.key');
  keys.forEach((k) => {
    if (k.dataset.code === event.code) k.classList.remove('key--active');
  });
};

const onClickKey = (event) => {
  const textAria = document.querySelector('.text-field');
  textAria.innerHTML += event.target
    .closest('div')
    .querySelector('span').innerText;
};

export { keydown, keyup, onClickKey };
