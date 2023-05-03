const changeLang = () => {
  const bodyLangTag = document.querySelector('body');

  if (bodyLangTag.dataset.lang === 'eng') {
    bodyLangTag.dataset.lang = 'rus';
  } else {
    bodyLangTag.dataset.lang = 'eng';
  }

  localStorage.setItem('language', `${bodyLangTag.dataset.lang}`);
};

export default changeLang;
