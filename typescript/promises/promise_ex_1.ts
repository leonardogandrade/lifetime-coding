// Create a JavaScript Promise that, after a delay of 2 seconds, either resolves with the message "Hello World" or rejects with the error message "Error occurred".
// The outcome (resolve or reject) should be determined by a random condition, ensuring a 50/50 chance of either occurring each time the code runs.

namespace PromiseExOne {
  const myPromise = new Promise<string>((resolve, reject) => {
    const trigger: number = Math.ceil(Math.random() * 100) % 2;

    setTimeout(() => {
      trigger ? resolve("Hello World") : reject("Error occurred.");
    }, 2000);
  });

  myPromise
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((rejected) => {
      console.log(rejected);
    });
}
