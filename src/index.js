function getVowelsAmount(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const str = string;
  let amount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
      if (str[i] === vowels[k]) {
        amount++;
      }
    }
  }

  return amount;
}