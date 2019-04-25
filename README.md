## Project

We'll use the [Unibet API](http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a) to create a single page application in React that
presents a list of matches in Carousel.

## Quick Start

1. `npm install`
2. `npm run start`
3. Project should open in `localhost:3000`
4. `npm run test` to test the component

## How I did it

This project was bootstrapped with `Create React App`. Besides React, I'm taking the advantage of `localstorage` to reduce the Api and saving the data for 2 minute.

## Project Structure

```
src
├── Components               # Stateless Components
    ├── __test__             # test component for LiveEvent, Loader and LiveMatches.
        ├── PageLayout           # Page layout contains Header, Footer, Content and Navbar
            ├── __test__         # test component
    ├── Loader               # Loader with style
    ├── LiveEvent            # Live Event data
    ├── LiveMatches          # Live Matches component
    ├── Styles               # Component related styles

├── css                      # provided css in test
├── Images                   # Images folder

├── Pages                    # Pages
    ├── Matches              # Main page to show data on carousel
    ├── Instructions         # Instructions for the test
    ├── Styles               # Pages related styles

├── App.js                   # Entry point of the app
├── constants.js             # Constant for the complete app
├── setupTests.js            # Jest setup for test
├── index.js
```

## Tech Stack

```
- React
- Styled-Component
- React-Router
- Jest and Enzyme
```
