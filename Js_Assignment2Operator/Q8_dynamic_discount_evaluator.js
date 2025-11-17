// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

function calculateFinalTotal(cartItems) {
    // apply item-wise discount
    const withDiscounts = cartItems.map(ci => {
        let discountRate = 0;
        if (ci.category === "electronics") discountRate = 0.10;
        else if (ci.category === "fashion") discountRate = 0.05;
        const discountedPrice = ci.price * (1 - discountRate);
        return {...ci, discountedPrice, discountRate};
    });

    const subtotal = withDiscounts.reduce((s, it) => s + it.discountedPrice, 0);

    let extraOverallDiscount = 0;
    const rawTotal = cartItems.reduce((s, it) => s + it.price, 0);
    if (rawTotal > 50000) extraOverallDiscount = 0.05;

    const finalTotal = subtotal * (1 - extraOverallDiscount);

    console.log("Items with discounts:", withDiscounts);
    console.log(`Raw total: ${rawTotal}`);
    console.log(`Subtotal after category discounts: ${subtotal}`);
    console.log(`Extra overall discount: ${extraOverallDiscount * 100}%`);
    console.log(`Final total to pay: ${finalTotal.toFixed(2)}`);
    return finalTotal;
}

calculateFinalTotal(cart);