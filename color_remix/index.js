function mixColors(color1, color2) {
  let resultColor;
  switch (color1) {
    case 'red':
      switch (color2) {
        case 'blue':
          resultColor = 'purple';
          break;
        case 'yellow':
          resultColor = 'orange';
          break;
        default:
          resultColor = 'Invalid color combination';
          break;
      }
      break;
    case 'blue':
      switch (color2) {
        case 'red':
          resultColor = 'purple';
          break;
        case 'yellow':
          resultColor = 'green';
          break;
        default:
          resultColor = 'Invalid color combination';
          break;
      }
      break;
    case 'yellow':
      switch (color2) {
        case 'red':
          resultColor = 'orange';
          break;
        case 'blue':
          resultColor = 'green';
          break;
        default:
          resultColor = 'Invalid color combination';
          break;
      }
      break;
    default:
      resultColor = 'Invalid color combination';
      break;
  }
  console.log(resultColor);
}

mixColors('red','blue')