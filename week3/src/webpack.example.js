const calc = (a, b) => a + b;

console.log(`calc : ${calc(1, 2)}`);

console.log(document.querySelector("p"));

document.querySelector(
  "p"
).innerText = `Hello Webpack dev Server! ${new Date().toISOString()}`;
