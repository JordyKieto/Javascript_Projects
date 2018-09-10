import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import CheckboxWithLabel from '../CheckboxWithLabel'

it('CheckboxWithLabel changes the text after click', ()=> {
    // render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn="on" labelOff="off" />);

    expect(checkbox.text()).toEqual("off");

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('on');
});