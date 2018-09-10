import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Header from '../header'

it('CheckboxWithLabel changes the text after click', ()=> {
    // render a checkbox with label in the document
    const header = shallow(<Header />);

    expect(header.text()).toEqual("NUBIAN MAPSS");


});