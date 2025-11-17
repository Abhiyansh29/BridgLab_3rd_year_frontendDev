// Q1. Scope Conflict Resolver
const bonus = 5000; // global

function calculateSalary(isPermanent) {
    let salary = 40000; // local
    let total = salary;
    if (isPermanent) {
        // when isPermanent is local true, add the bonus
        total += bonus;
    }
    console.log(`Inside calculateSalary (isPermanent=${isPermanent}) -> Total Salary: ${total}`);
    return total;
}

// demonstrate how changing isPermanent affects local behavior (global bonus stays same)
calculateSalary(true);   // permanent: bonus added
calculateSalary(false);  // not permanent: bonus not added

console.log(`Global bonus variable remains: ${bonus}`);