// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';


describe("Hello", () => {
  it("should render hello", () => {
    const wrapper = shallow(<Hello />);
  });
});