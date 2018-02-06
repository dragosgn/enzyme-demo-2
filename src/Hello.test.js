// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Hello from './Hello';


describe("Hello", () => {
  it("should render hello", () => {
    const wrapper = shallow(<Hello />);
  });
});
