// Using fetchSimulator simulate fetching data from three different URLs with a twist.
// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.
// Use Promise.race to get the fastest response!

namespace PromiseExFour {
  const fetchMock = (delay: number) =>
    new Promise<Record<string, string>>((resolve) => {
      setTimeout(() => {
        resolve({ name: `data retrieved - ${delay}` });
      }, delay);
    });

  const promiseOne = new Promise<Record<string, string>>((resolve) => {
    fetchMock(10000).then((fetchedData) => {
      resolve(fetchedData);
    });
  });

  const promiseTwo = new Promise<Record<string, string>>((resolve) => {
    fetchMock(3000).then((fetchedData) => {
      resolve(fetchedData);
    });
  });

  const promiseThree = new Promise<Record<string, string>>((resolve) => {
    fetchMock(5000).then((fetchedData) => {
      resolve(fetchedData);
    });
  });

  Promise.race([promiseOne, promiseTwo, promiseThree]).then((result) => {
    console.log(result);
  });
}
