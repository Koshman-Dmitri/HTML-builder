const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const myPath = path.join(__dirname, 'output.txt');

function writeData(data) {
  fs.writeFile(myPath, data, { flag: 'a' }, () => {});
}

writeData('');

stdout.write('Enter text\n');
stdin.on('data', (data) => {
  const strData = data.toString().slice(0, -2);
  if (strData === 'exit') process.exit();
  writeData(data);
});

process.on('exit', () => stdout.write('Goodbye!'));
process.on('SIGINT', () => process.exit());
