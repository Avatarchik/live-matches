import React from 'react';

import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Test suite for Footer Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
    expect(component.find('div')).toHaveLength(1);
  });
});
