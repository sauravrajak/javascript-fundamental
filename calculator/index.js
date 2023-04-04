function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "%":
      return num1 + num2;
      break;

    default:
      break;
  }
}

let result = calculate(15, 25, "+");

console.log(result);
