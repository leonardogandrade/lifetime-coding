// Here we have promised resolved whe trigger is ONE and rejected when it is ZERO.

namespace Basic {
  const promiseOne = new Promise<string>((resolve, reject) => {
    const trigger: number = Math.floor(Math.random() * 100) % 2;
    trigger ? resolve("Rsolved") : reject("Rejected");
  });

  promiseOne
    .then((resolved) => {
      console.log(resolved);
    })
    .catch((rejected) => {
      console.log(rejected);
    });
}
