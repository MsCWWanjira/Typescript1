function reverseInteger(input: number): number {
    const isNegative = input < 0;
    let reversedNumber = parseInt(
      Math.abs(input).toString().split('').reverse().join('')
    );
    
    if (isNegative) {
      reversedNumber = -reversedNumber;
    }
    
    return reversedNumber;
  }
  
  const inputNumber = 6789;
  const reversedNumber = reverseInteger(inputNumber);
  console.log(`Reversed number: ${reversedNumber}`);
  
  const negativeInputNumber = -1234;
  const reversedNegativeNumber = reverseInteger(negativeInputNumber);
  console.log(`Reversed negative number: ${reversedNegativeNumber}`); 