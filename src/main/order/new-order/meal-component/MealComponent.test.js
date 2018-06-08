import React, { Component } from 'react';
import MealComponent from './MealComponent';

import { expect as chaiExpect } from 'chai';
import enzyme, {shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
enzyme.configure({ adapter: new Adapter() });

describe('Main', () => {
    describe('Component', () => {
        it('displays a main component', () => {
            const output = shallow(<MealComponent />);
            expect(toJson(output)).toMatchSnapshot();
        });
    });
});