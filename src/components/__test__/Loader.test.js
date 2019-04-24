import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
// import Loader from '../Loader';
import 'jest-styled-components';

// wrapper for loader
const Wrapper = styled.div`
  display: flex;
`;

describe('Test suite for Loader Component', () => {
  // create a UI snapshot to indentify UI changes or design regressions

  it('render correctly text component', () => {
    const component = shallow(<Wrapper />);
    expect(component).toMatchSnapshot();
    // expect(component.find('li')).toHaveLength(4)
  });
});
