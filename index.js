function isPalindrome(word) {
  // Write your algorithm here
  let reversedString = word.split('').reverse().join('');
  if (reversedString === word){
    return true
  } else {
    return false};
}

/*
  Add written explanation of your solution here
*/

//well the first part is me declaring variable and splitting it, reversing it, and then joining it.
//I then make an if else statement saying if reversed word equals inputted word than return true and else the opposite.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome('susan'));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
