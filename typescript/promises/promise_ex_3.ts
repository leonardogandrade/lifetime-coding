// Using fetchSimulator simulate fetching data from three different URLs in parallel.
// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.
// Use Promise.all to wait for all these Promises to resolve and then process the results.

namespace PromiseExThree {
  const fetchMock = (delay: number) =>
    new Promise<Record<string, string>>((resolve) => {
      setTimeout(() => {
        resolve({ name: `data retrieved - ${delay}` });
      }, delay);
    });

  const promiseOne = new Promise<string>((resolve) => {
    fetchMock(1000).then((resolved) => {
      console.log(resolved);
    });
  });

  const promiseTwo = new Promise<string>((resolve) => {
    fetchMock(3000).then((resolved) => {
      console.log(resolved);
    });
  });

  const promiseThree = new Promise<string>((resolve) => {
    fetchMock(5000).then((resolved) => {
      console.log(resolved);
    });
  });

  Promise.all([promiseOne, promiseTwo, promiseThree]).then((promises) => {
    console.log(promises);
  });
}
