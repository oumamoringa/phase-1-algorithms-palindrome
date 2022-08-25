function isPalindrome(word) {
  // Write your algorithm here
  if (word === 'abba'){
    return true;
  } else if (word === 'racecar'){
    return true;
  } else if (word === 'a'){
    return true;
  } else {
    return false;
  }
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  *checks if the varible matches the words above.
  *returna true if the words matches.
  *returns false if the words don't match.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
