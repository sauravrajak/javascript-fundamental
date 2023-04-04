function calculateBill(costs, numPeople) {
  // Calculate the total cost of the dishes
  const totalCost = costs.reduce((sum, cost) => sum + cost, 0);
  
  // Calculate the bill per person
  const billPerPerson = totalCost / numPeople;
  
  // Return an object containing the total bill and the bill per person
  return {
    totalBill: totalCost,
    billPerPerson: billPerPerson
  };
}

const costs = [10.99, 8.50, 14.25, 12.75];
const numPeople = 4;

const bill = calculateBill(costs, numPeople);
console.log(bill); // { totalBill: 46.49, billPerPerson: 11.6225 }
