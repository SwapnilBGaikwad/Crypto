import React from "react";
import expect from "expect";
import {mount} from "enzyme";
import {Navbar} from "react-bootstrap";

import HomePage from "../app/component/PageHeader";

describe("PageHeader", () => {
    it("render header with website name as GeekBook", () => {
        let homePage = mount(<HomePage/>);
        expect(homePage.find(Navbar.Header).length).toBe(1);
    });

    it("have dropdown for list of articles", () => {
        let homePage = mount(<HomePage/>);
        expect(homePage.find(Navbar.Collapse).length).toBe(1);

        let itemList = homePage.find('.glyphicon-list');
        expect(itemList.length).toBe(1);
    });
});