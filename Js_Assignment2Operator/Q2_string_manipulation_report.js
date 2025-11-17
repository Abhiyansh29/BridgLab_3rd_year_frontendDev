// Q2. String Manipulation Report
let product = " wireless headphones PRO ";

let cleaned = product.trim()                       // remove edge spaces
    .toLowerCase()                                // lower case
    .split(" ")                                   // split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
    .join(" ");                                   // rejoin

// replace "pro" (case-insensitive originally lowered) with "Pro Edition"
cleaned = cleaned.replace(/\bPro\b/, "Pro Edition");

console.log("Cleaned Title:", cleaned);
console.log("Length:", cleaned.length);