function is_palindrome(word) {
  // returns true if word is a palindrome, false otherwise
  let d="";
  for (let c=word.length-1;c>=0;c--)
  {
    d=d+word[c];
  }
  return d==word;
}
is_palindrome("hannah");
module.exports = is_palindrome;
