function countVowels(name) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i].toLowerCase())) {
      count++;
    }
  }
  
  console.log(`The name ${name} has ${count} vowels.`);
}


countVowels("Saurav")