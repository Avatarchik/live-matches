import React from 'react';

import { shallow } from 'enzyme';
import Header from '../Header';

describe('Test suite for Header Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
    expect(component.find('div')).toHaveLength(1);
  });
});
