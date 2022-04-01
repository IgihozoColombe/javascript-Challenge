function isPrime(num){
    if(num < 2)
        return false;

    for(let x=2; x<=num/2; x++){
        if(num%x == 0)
            return false;
    }
    return true;
}

function arraySort(arr){
    let sorted = [];
    for(let i=0;i<arr.length;i++){
        let IndexMax = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]>arr[IndexMax]){
                IndexMax = j;
            }
        }
        if(arr[i]!= arr[IndexMax]){
            let temp = arr[i];
            arr[i] = arr[IndexMax];
            arr[IndexMax] = temp;
        }
        if(!isPrime(arr[i])){
            sorted.push(arr[i]);
        }
    }
    return sorted;
}

console.log(arraySort([1,2,3,4,5,6,7,8,9,12]))