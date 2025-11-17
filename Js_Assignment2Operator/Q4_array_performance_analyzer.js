// Q4. Array Performance Analyzer
// Generate 8 random scores between 30 and 100
const scores = Array.from({length: 8}, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const total = scores.reduce((s, v) => s + v, 0);
const average = total / scores.length;
const passedCount = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log(`Highest: ${highest}, Lowest: ${lowest}, Average: ${average.toFixed(2)}, Passed: ${passedCount} / ${scores.length}`);