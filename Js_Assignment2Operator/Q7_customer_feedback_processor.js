// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";

const words = feedback.split(/\s+/).filter(Boolean);
const wordCount = words.length;
const hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Feedback:", feedback);
console.log("Word count:", wordCount);
if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}