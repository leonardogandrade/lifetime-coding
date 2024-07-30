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

  const promiseOne = () =>
    new Promise<string>((resolve, reject) => {
      let trigger: number = Math.random();
      trigger > 0.5
        ? (trigger = Math.ceil(trigger))
        : (trigger = Math.floor(trigger));
      trigger
        ? reject(trigger)
        : resolve(`Resolved promise 1! - trigger value: ${trigger}`);
    });

  const promiseTwo = (cancel: boolean) =>
    new Promise<string>((resolve, reject) => {
      cancel
        ? reject(`Rejected promise 2! - cancel value:${Boolean(cancel)}`)
        : resolve(`Resolved promise 2! - cancel value:${Boolean(cancel)}`);
    });

  promiseOne()
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((rejected) => {
      promiseTwo(rejected)
        .then((resolved) => {
          console.log(resolved);
        })
        .catch((rejected) => {
          console.log(rejected);
        });
    });
}
