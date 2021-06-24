//Accessing Files asynchronously
const { readFile, writeFile, write } = require("fs");
//We're gonna do this by using a callback when it's done
//The callback function is the second argument
//If you don't add the encoding you only get the buffer
console.log('start');
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');

//Notice that it would start the next task before finishign the first one
//It offloads to the message queue so that the call stack can proceed