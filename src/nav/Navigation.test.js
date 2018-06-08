import React, { Component } from 'react';
import Navigation from './Navigation';

import { expect as chaiExpect } from 'chai';
import enzyme, {shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
enzyme.configure({ adapter: new Adapter() });

describe('Navigation', () => {
    describe('Component', () => {
        it('displays a navigation', () => {
            const output = shallow(<Navigation />);
            expect(toJson(output)).toMatchSnapshot();
        });

        it('applies the .app-header class', () => {
            const output = render(<Navigation />);
            chaiExpect(output.find('.app-header').length).to.equals(1);
        });
    });
});