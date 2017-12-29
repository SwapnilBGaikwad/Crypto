export const encryptMessage = (message, {key,N}) => {
    let encrypted = 1;
    while(key > 0) {
        encrypted *= message;
        encrypted %= N;
        key--;
    }
    return encrypted;
};