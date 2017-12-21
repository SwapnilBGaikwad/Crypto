function gcd(p, q) {
    if (p === 0) {
        return q;
    }
    if (q === 0) {
        return p;
    }
    return gcd(q % p, p);

}

const getEValues = function(p, q) {
    const phiN = (p - 1) * (q - 1);
    let eVals = [];
    let e = 2;
    while (e < phiN) {
        if (gcd(e,phiN) === 1) {
            eVals.push(e);
        }
        e++;
    }
    return eVals;
};

export {getEValues}