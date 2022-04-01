function checkPalindrome(string) {

   
    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
 
        return true;
    }
    else {

        return false;
    }
}

console.log(checkPalindrome("Madam"));