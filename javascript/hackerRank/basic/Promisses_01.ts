// The main ideia of Promisses is register two callback functions
// one for success and another to rejection, we use the constructor
// of the class Promisse to accomplish that.
// the class promisse has two epecial methods THEN and CATCH
// the first one to get the successfull fullfilled of the promise and the second one
// to error responses

const writeDb = new Promise((resolve, reject) => {
  const id = Math.floor(Math.random() * 10);

  if (id % 2 === 0) {
    setTimeout(() => {
      resolve("Saved");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Error");
    }, 1000);
  }
});

const data = writeDb
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
