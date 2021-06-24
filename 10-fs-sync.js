//File accessing can be synchronous or asynchronous

const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//now give a path to the file and the encoding
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//Now to write them to a new text file
//writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`)

//Appending to the file with {flag a}
writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done with this task');
console.log('starting the next task');

//This last part shows that if 1 task is really slow, it will hold up your entire app
//Thats why async is very important (dont get the timeout thing youtube always gets at higher speeds)