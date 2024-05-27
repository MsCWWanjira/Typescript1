function countVowels(sentence: string): number {
  
    const lowerSentence = sentence.toLowerCase();
  
    const vowels = "aeiou";
  
    let vowelCount = 0;
  
    for (const char of lowerSentence) {
      
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const mySentence = "This is my Test Sentence!";
  const vowelCount = countVowels(mySentence);
  console.log(`The sentence "${mySentence}" has ${vowelCount} vowels.`);  