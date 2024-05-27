function isPowerOfTwo(num: number): boolean {
    
    if (num <= 0) {
      return false;
    }
  
    return (num & (num - 1)) === 0;
  }
  
  const number = 50;
  const isPower2 = isPowerOfTwo(number);
  console.log(`${number} is power of two: ${isPower2}`);  