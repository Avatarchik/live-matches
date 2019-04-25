import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

// resolved the error with react-slick
/* eslint-disable */
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {}
    };
  };

configure({ adapter: new Adapter() });
