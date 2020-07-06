// console.log(process.argv);
// // console.log(process.env)
// let params = process.argv;

// params.splice(0, 2);

// console.log(params);

// ////// 2secs

// /// ---
function waitForMe() {
  return new Promise(function (resolve, reject) {
    //resolve is ONLY WHEN PROGRAM IS A SUCCESS
    //reject is ONLY WHEN PROGRAM FAILS
    if (true) {
      resolve("Yay! it worked!!!");
    } else {
      reject("It didnt work...");
    }
  });
}

// setTimeout(() => {
//   console.log("I am in the middle");
// }, 2000);

waitForMe()
  .then((result) => {
    console.log("starting here");
    console.log(result);
    console.log("completed!");
  })
  .catch((error) => {
    console.log(error);
  });

// let s = async () => {
//   let output = await waitForMe();
//   console.log(output);
// };

// s();

console.log("Something!!!");
