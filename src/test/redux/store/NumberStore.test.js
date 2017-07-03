import expect from "expect";
import store from "../../../app/redux/store/NumberStore";

describe("Number store", () => {
    it("Simple test", () => {
        let state = store.dispatch({type: "INCREMENT"});
        expect(store.getState()).toBe(1);
    });
});