const calculateTotalCost = (cart) => {
  let totalCost = 0;
  // looping through the cart
  for (let item of cart) {
    totalCost += item.unitPrice * item.quantity;
  }
  return totalCost;
};


const cart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 3 },
  { unitPrice: 15, quantity: 1 }
];

const totalCost = calculateTotalCost(cart);
console.log("Total cost: ", totalCost); // Output: Total cost: 50
