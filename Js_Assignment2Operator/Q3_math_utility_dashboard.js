// Q3. Math Utility Dashboard
const x = 16.75;

const rounded = Math.round(x);
const sqrtVal = Math.sqrt(x);
const power3 = Math.pow(x, 3);
const rand10to50 = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Summary for x = ${x}
- Rounded value: ${rounded}
- Square root : ${sqrtVal}
- Power (x^3)  : ${power3}
- Random 10-50 : ${rand10to50}
`.trim();

console.log(summary);