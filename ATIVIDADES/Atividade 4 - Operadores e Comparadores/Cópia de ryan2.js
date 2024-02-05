const leitor = require("readline-sync");
//&
const a = true;
const b = false;
const c = true;

console.log(a&&b);
console.log(b&&c);
console.log(a&&c);
console.log(a&&b&&c);

// ||
const a1 = true;
const b1 = false;
const c1 = true;

console.log(a1 || b1);
console.log(b1 || c1);
console.log(a1 || c1);
console.log(a1 || b1 || c1);
