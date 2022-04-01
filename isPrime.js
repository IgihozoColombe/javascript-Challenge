const filterPrimes = array => {
    const isPrime = n => {
     for (let i = 2; i < n; i++)
      if (n % i === 0) 
     return false;
     return n > 1;
    }
    return array.filter(number => isPrime(number));
   }
   console.log(filterPrimes([34, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34]))