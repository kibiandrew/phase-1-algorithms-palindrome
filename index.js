function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord=word.split("").reverse().join("")
  if(word==reverseWord){
    return true;
  }
  else{
    return false;
  }

}
console.log(isPalindrome("mom"))

/* 
  Add your pseudocode here
  declare a fuction Palindrome
  if the argument is palindrom it will return true
*/

/*
  Add written explanation of your solution here
  i will declare a valirible reverseWord
  use split("") to split the word a return them in a array
  the reverse the word which are split
  use join("") to join them together
  if they match with the original it will return true or false
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