export const encryptMessage = (message, {e,N}) => {
    let encrypted = 1;
    while(e > 0) {
        encrypted *= message;
        encrypted %= N;
        e--;
    }
    return encrypted;
};