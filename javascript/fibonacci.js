function fibonacci(num) {
  // type your code here
  const seed = [0, 1]

  for(let i = 0 ; i < num ; i++) {
    seed.push(seed[i] + seed[i + 1])
  }

  return seed[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting 0");
  console.log("=>", fibonacci(0));

  console.log("Expecting 6765");
  console.log("=>", fibonacci(20))

  console.log("Expecting 1");
  console.log("=>", fibonacci(2));

  console.log("Expecting 610")
  console.log("=>", fibonacci(15));

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// start sequence with array with 0 and 1
// loop through array and use num to do looping however many times
// return value after loop has finished

// And a written explanation of your solution
