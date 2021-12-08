function reverseString(str) {
  // type your code here
  // turn it into an array
  const arr = str.split("")
  // reverse array
  const reversed = arr.reverse()
  // turn in back into a string
  const result = reversed.join("")

  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
