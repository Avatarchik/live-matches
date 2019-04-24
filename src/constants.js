// Api End point provided by unibet
const API_URL =
  'https://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a';

// Api End point provided by unibet with callback
const API_URL_WITH_CALLBACK =
  'https://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a';

// Sports icons to be shown
const SPORTS_ICONS = ['FOOTBALL', 'TENNIS', 'BASKETBALL'];

// Cache time for API
const API_CACHE_TIME = 2 * 60000;

// Fetch call default options
const FETCH_DEFAULT_OPTION = {
  timeout: 5000,
  jsonpCallback: 'callback',
  jsonpCallbackFunction: null
};

// Target url on button click
const TARGET_URL = 'https://www.unibet.com/betting#event/live/';

// Place bet text button
const PLACE_BET_TEXT = 'Place a bet';

// Place bet text button
const SCORE_NOT_AVAILABLE = 'Score Not Available';

// Slider settings
const SLIDER_SETTINGS = {
  dots: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'live-match-slider',
  autoplaySpeed: 3000
};

export {
  API_URL,
  API_URL_WITH_CALLBACK,
  SPORTS_ICONS,
  API_CACHE_TIME,
  FETCH_DEFAULT_OPTION,
  TARGET_URL,
  PLACE_BET_TEXT,
  SLIDER_SETTINGS,
  SCORE_NOT_AVAILABLE
};
