import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import AppBar from 'material-ui/AppBar';

import HomePage from "../app/component/PageHeader";

describe("PageHeader", () => {
    it("render header with AppBar component", () => {
        let homePage = mount(<HomePage/>);
        expect(homePage.find(AppBar).length).toBe(1);
    });
});