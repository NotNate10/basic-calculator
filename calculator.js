const displayAreaElement = document.querySelector('.js-display-area');
const allButtonElements = document.querySelectorAll('button');
const bodyElement = document.body;

allButtonElements.forEach((button) => {
  const buttonChar = button.innerHTML
  bodyElement.addEventListener('keydown', (event) => {
    if (event.key === buttonChar && buttonChar !== 'C' && buttonChar !== 'X' && buttonChar !== '=' && buttonChar !== '.') {
      displayAreaElement.value += buttonChar;
    } else if (event.key === 'Backspace') {
      displayAreaElement.value = '';
    } else if (event.key === '=' || event.key === 'Enter') {
      let result;

      try {
        result = eval(displayAreaElement.value);
      } catch (error) {
        displayAreaElement.value = 'Error'
      }
      
      if (result !== NaN && result !== undefined) {
        displayAreaElement.value = result;
      } else {
        displayAreaElement.value = 'Error';
      }
    }
  })
  
  button.addEventListener('click', () => {
    if (buttonChar !== 'C' && buttonChar !== 'X' && buttonChar !== '=') {
      displayAreaElement.value += buttonChar;
    } else if (buttonChar === 'C') {
      displayAreaElement.value = '';
    } else if (buttonChar === '=') {
      let result;

      try {
        result = eval(displayAreaElement.value);
      } catch (error) {
        displayAreaElement.value = 'Error'
      }
      
      if (result !== NaN && result !== undefined) {
        displayAreaElement.value = result;
      } else {
        displayAreaElement.value = 'Error';
      }
    } else if (buttonChar === 'X') {
      displayAreaElement.value = displayAreaElement.value.slice(0, -1);
    }
  })
});