function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is a prime number
    if (num % 2 === 0) return false; // Even numbers greater than 2 are not prime

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
            return false; // Divisible by a number other than 1 and itself
        }
    }
    return true; // No divisors found, number is prime
}