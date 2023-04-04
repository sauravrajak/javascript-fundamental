const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return Math.round(discountPercentage * 100) / 100; // rounding off to 2 decimal places
};

const originalPrice = 100;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(discountPercentage); // output: 20
