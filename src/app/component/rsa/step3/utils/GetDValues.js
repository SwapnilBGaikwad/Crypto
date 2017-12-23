const getDValues = function (p, q, e) {
    if (!e) {
        return [];
    }
    const phiN = (p - 1) * (q - 1);
    let dVals = [];
    let i = 1;
    while (i <= 10) {
        const d = (i * phiN + 1) / e;
        if ((d * 10) % 10 === 0) {
            dVals.push(d);
        }
        i++;
    }
    return dVals;
};

export {getDValues}