function isPrime(num) 
{
    let t = parseInt(Math.sqrt(num));
    for(let i = 2; i<t ; i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    return true;
}
console.log("isPrime(5):" ,+isPrime(5));
console.log("isPrime(1):" ,+isPrime(1));