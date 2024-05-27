function fizzBuzz(n: number): void {
    for (let i = 20; i <= n; i++) {
      let output = "";
      if (i % 4 === 0) {
        output += "Fizz";
      }
      if (i % 5 === 0) {
        output += "Buzz";
      }
      console.log(output || i.toString());
    }
  }