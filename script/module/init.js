const init = () => {
  const root = document.getElementById('root');
  // Create container
  const container = document.createElement('div');
  container.classList.add('container');
  root.appendChild(container);
  // Create title h1
  const title = document.createElement('h1');
  title.classList.add('title');
  title.appendChild(document.createTextNode('RSS Virtual Keyboard'));
  container.appendChild(title);
  // Create textarea
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-field');
  textArea.setAttribute('disabled', '');
  textArea.rows = 7;
  container.appendChild(textArea);
  // Create keyboard container
  const keyboardField = document.createElement('div');
  keyboardField.classList.add('keybord-container');
  container.appendChild(keyboardField);
  // Crate description
  const description1 = document.createElement('p');
  const description2 = document.createElement('p');
  description1.appendChild(
    document.createTextNode('Клавиатура создана в операционной системе Windows')
  );
  description2.appendChild(
    document.createTextNode(
      'Для переключения языка используйте: левыe Shift + Alt'
    )
  );
  description1.classList.add('description');
  description2.classList.add('description');
  container.appendChild(description1);
  container.appendChild(description2);
};

export default init;
