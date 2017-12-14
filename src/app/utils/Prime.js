function isPrime(no) {
    let i = 2;
    while (i <= no / 2) {
        if (no % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

export default isPrime;