const displayAreaElement = document.querySelector('.js-display-area');
const allButtonElements = document.querySelectorAll('button');

allButtonElements.forEach((button) => {
  const buttonChar = button.innerHTML
  
  button.addEventListener('click', () => {
    if (buttonChar !== 'C' && buttonChar !== 'Delete' && buttonChar !== '=') {
      if (displayAreaElement.value === '0' && buttonChar === '0') {
        displayAreaElement.value = '0'
      } else if (displayAreaElement.value === '.' && buttonChar === '.') {
        displayAreaElement.value = '.'
      } else {
        displayAreaElement.value += buttonChar;
      }
    } else if (buttonChar === 'C') {
      displayAreaElement.value = '';
    } else if (buttonChar === '=') {
      let result;
      

      try {
        result = eval(displayAreaElement.value);
      } catch (error) {
        displayAreaElement.value = 'Error'
      }

      console.log(result)
      console.log(displayAreaElement.value)
      
      if (displayAreaElement.value === 'Error') {
        result = 'Error';
      }

      if (result !== NaN && result !== undefined) {
        displayAreaElement.value = result;
      } else {
        displayAreaElement.value = 'Error';
      }
    } else if (buttonChar === 'Delete') {
      displayAreaElement.value = displayAreaElement.value.slice(0, -1);
    }
  })
});
