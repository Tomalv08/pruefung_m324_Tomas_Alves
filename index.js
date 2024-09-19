import chalk from "chalk";

let myUnusedVariable = 5;

// Absichtlich == anstatt === verwenden
if (myUnusedVariable == 5) {
  console.log(chalk.blue("It works"));
}