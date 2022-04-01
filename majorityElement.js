function isMajority(arr, n, x)
{
    let i, last_index = 0;

    // Get last index according to
    // n (even or odd)
    last_index = (n % 2 == 0) ?
    parseInt(n / 2, 10) : parseInt(n / 2, 10) + 1;

    
    for (i = 0; i < last_index; i++) {
        // Check if x is present and
        // is present more than n/2 times
        if (arr[i] == x && arr[i +
        parseInt(n / 2, 10)] == x)
            return true;
    }
    return false;
}
   
let arr = [ 1, 2, 3, 4, 4, 4, 4 ];
let n = arr.length;
let x = 4;
if (isMajority(arr, n, x) == true)
 console.log("yes");
else
console.log("No");
