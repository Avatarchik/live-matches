import React from 'react';
import { shallow } from 'enzyme';
import LiveMatches from '../LiveMatches';

const props = {
  liveMatches: {
    length: 0
  }
};

describe('Test suite for LiveMatches Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<LiveMatches {...props} />);
    expect(component).toMatchSnapshot();
  });
});
