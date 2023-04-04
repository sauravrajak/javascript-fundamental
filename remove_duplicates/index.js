function removeDuplicates(cart) {
  const newCart = [];
  
  for (let i = 0; i < cart.length; i++) {
    if (!newCart.includes(cart[i])) {
      newCart.push(cart[i]);
    }
  }
  
  return newCart;
}




const customerCart = ['item1', 'item2', 'item3', 'item2', 'item4', 'item1','item3'];
const newCart = removeDuplicates(customerCart);
console.log(newCart); // Output: ['item1', 'item2', 'item3', 'item4']
