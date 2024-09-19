import chalk from 'chalk';

// Nutze const anstatt let, weil sich der Wert nicht ändert
const myUnusedVariable = 5;

// Nutze === anstatt ==
if (
  myUnusedVariable ===
  5
) {
  console.log(
    chalk.blue(
      'It works',
    ),
  );
}
