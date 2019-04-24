import React from 'react';

import { shallow } from 'enzyme';
import BetWrapper from '../BetWrapper';

describe('Test suite for Navbar Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<BetWrapper />);
    expect(component).toMatchSnapshot();
  });
});
