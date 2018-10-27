const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getAnswer = () => {
rl.question('What do you think of Node.js x/10 ? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  answer = parseInt(answer);
    if(answer !== 10) {
        getAnswer();
    } else{
     console.log(`good job buddy`)
      rl.close();
    }
})
};
getAnswer();