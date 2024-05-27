function generateFibonacciSequence(limit: number): number[] {
    let fibonacciSequence: number[] = [0, 1];
  
    while (true) {
      let nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
      if (nextNumber > limit) {
        break;
      }
      fibonacciSequence.push(nextNumber);
    }
  
    return fibonacciSequence;
  }
  
  const fibonacciSequenceUpTo100 = generateFibonacciSequence(100);
  console.log(fibonacciSequenceUpTo100);  