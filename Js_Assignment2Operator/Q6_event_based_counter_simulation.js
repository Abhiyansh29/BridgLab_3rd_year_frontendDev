// Q6. Event-Based Counter Simulation
let count = 0;

function increment() {
    function doInc() {
        count++;
        console.log("Incremented -> count =", count);
    }
    doInc();
}

function decrement() {
    function doDec() {
        count--;
        console.log("Decremented -> count =", count);
    }
    doDec();
}

// Simulate clicks
increment();
increment();
decrement();
increment();