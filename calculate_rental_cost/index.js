function calculateRentalCost(numDays, carType) {
  let rentalCost = 0;
  
  switch (carType) {
    case "economy":
      rentalCost = 4000;
      break;
    case "midsize":
      rentalCost = 10000;
      break;
    case "luxury":
      rentalCost = 20000;
      break;
    default:
      return "Invalid car type";
  }

  const totalCost = rentalCost * numDays;
  return totalCost;
}


const numDays = 3;
const carType = "midsize";

const rentalCost = calculateRentalCost(numDays, carType);

console.log(`The total cost of renting a ${carType} car for ${numDays} days is Rs. ${rentalCost}/-.`);
