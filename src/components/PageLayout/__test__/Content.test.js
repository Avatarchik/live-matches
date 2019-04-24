import React from 'react';

import { shallow } from 'enzyme';
import Content from '../Content';

describe('Test suite for Content Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<Content />);
    expect(component).toMatchSnapshot();
  });
});
