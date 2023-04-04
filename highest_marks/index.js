const marks = [85, 92, 78, 90, 88]; // array of marks

let highestMarks = marks[0]; // assume first student has the highest marks

// iterate through the array and compare each mark with the highestMarks variable
for (let i = 1; i < marks.length; i++) {
  highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log(`The highest marks scored by any student is ${highestMarks}.`);
