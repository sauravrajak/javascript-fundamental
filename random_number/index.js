// this is a self invoked function

(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number: ${randomNumber}`);
})();


