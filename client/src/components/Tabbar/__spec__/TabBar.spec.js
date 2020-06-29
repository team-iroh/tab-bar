import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabBar from '../TabBar';

describe('TabBar Component', () => {
  let component;

  beforeEach(() => {
    component = mount(<TabBar />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without failure', () => {
    expect(component).toBeDefined();
  });

  it('should match the test snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
