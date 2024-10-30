
const { Command } = require('commander');
const program = new Command();
const fs = require('fs');

program
  .name('readFile')
  .description('Read all the words of the file and returns the count')
  .version('0.0.1');

program.command('read')
  .description('Returns the count of the words in a file')
  .argument('<file>', 'read the file')
  .action(file => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
      }
      let arr = data.split(' ');
      console.log(`You have ${arr.length} words in this file`);
    });
  });

program.parse();
