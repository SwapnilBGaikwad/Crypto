import expect from "expect";
import ReactTestUtils from "react-dom/test-utils";

import React from "react";
import ReactDOM from "react-dom";

import {Button} from "react-bootstrap";
import ShoppingPage from "../app/component/ShoppingPage";

describe("Shopping Page test", () => {
    it("Should show popup", () => {
        let testSubject = ReactTestUtils.renderIntoDocument(<ShoppingPage/>);
        let buttons = ReactTestUtils.scryRenderedComponentsWithType(testSubject, Button);
        expect(buttons.length).toBe(1);

        let subject = ReactDOM.findDOMNode(testSubject);
        expect(subject.getElementsByClassName('modal-dialog').length).toBe(0);

        let button = ReactDOM.findDOMNode(buttons[0]);
        ReactTestUtils.Simulate.click(button);

        subject = ReactDOM.findDOMNode(testSubject);
        expect(subject.getElementsByClassName('modal-dialog').length).toBe(1);
    });
});