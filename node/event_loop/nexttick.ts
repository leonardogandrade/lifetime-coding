const startDate = Date.now();

setTimeout(() => {
  console.log("pause...");
}, 3000);

process.nextTick(() => {
  console.log("Next Tick");
});
