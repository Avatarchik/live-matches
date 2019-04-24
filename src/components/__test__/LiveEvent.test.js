import React from 'react';
import { shallow } from 'enzyme';
import LiveEvent from '../LiveEvent';

const props = {
  liveEvent: {},
  liveScore: {
    score: 0
  }
};

describe('Test suite for LiveEvent Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<LiveEvent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
