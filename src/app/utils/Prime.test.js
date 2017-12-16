import expect from "expect";
import isPrime from './Prime';


describe("isPrime tests", () => {
    it("should return true if number is prime", () => {
        expect(isPrime(4)).toBe(false);
    });
});