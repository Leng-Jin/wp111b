function isPrime(num) 
{
    let t = parseInt(Math.sqrt(num));
    for (let i = 2; i < t; i++) 
    {
        if (num % i == 0) 
        {
            return false;
        }
    }
    return t
}