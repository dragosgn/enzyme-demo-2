// MyComponent.test.js
import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import Hello from './Hello';

configure({ adapter: new Adapter() });

describe("Hello", () => {
  it("should render hello", () => {
    const wrapper = shallow(<Hello />);
  });
});
