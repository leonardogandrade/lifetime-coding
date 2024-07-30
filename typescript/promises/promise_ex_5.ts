// Create a Promise that simulates a data fetching operation with a delay. Introduce a cancellation token that can be used to cancel the Promise before it resolves.
// If the operation is cancelled, the Promise should reject with a "Cancelled" message; otherwise, it should resolve normally.
// Cancel it!

namespace PromiseExFive {
  const fetchMock = (delay: number) =>
    new Promise<Record<string, string>>((resolve) => {
      setTimeout(() => {
        resolve({ name: `data retrieved - ${delay}` });
      }, delay);
    });

  const promiseOne = (cancel: boolean) =>
    new Promise<string>((resolve, reject) => {
      if (!cancel) {
        fetchMock(1000).then((data) => {
          resolve(`data fetched succesfully. ${JSON.stringify(data)}`);
        });
      } else {
        reject(`canceled by token ${cancel}`);
      }
    });

  promiseOne(false)
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((rejected) => {
      console.log(rejected);
    });
}
