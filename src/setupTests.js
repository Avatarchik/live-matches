import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// resolved the error with react-slick
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };

configure({ adapter: new Adapter() });
