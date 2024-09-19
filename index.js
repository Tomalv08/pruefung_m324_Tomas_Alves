import chalk from 'chalk';

// Nutze const anstatt let, weil sich der Wert nicht ändert
const myUnusedVariable = 5;

// Nutze === anstatt ==
if (myUnusedVariable === 5) {
  console.log(chalk.blue('It works'));
}

function calculate(a, b, operation) {
    if (operation === 'add') {
      return a + b;
    } else if (operation === 'subtract') {
      return a - b;
    } else {
      throw new Error('Invalid operation');
    }
  }
  
  
  
  export { calculate };