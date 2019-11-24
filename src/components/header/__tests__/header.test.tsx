import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../header';
import user from '../../../models/fixtures/user';
import UserModel from '../../../models/user';

let wrapper, startLogout;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout}  user={new UserModel(user)}/>);
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('Link').first().simulate('click');
});
