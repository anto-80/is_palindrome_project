function isPalendrome(str){
  const stringValue = str.split('');
  const reverseString = stringValue.reverse('');
  const reverseWord = reverseString.join('');

  if(str == reverseWord) {
	  return true;
  }else {
	  return false;
  }
}
 

function isPermutationPalendrome(str){
	// Complete the function!

}

module.exports = {isPalendrome, isPermutationPalendrome}