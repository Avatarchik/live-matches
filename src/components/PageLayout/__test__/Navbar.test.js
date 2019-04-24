import React from 'react';

import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Test suite for Navbar Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
    expect(component.find('ul').find('li')).toHaveLength(1);
  });
});
