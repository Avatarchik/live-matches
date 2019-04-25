import React from 'react';
import { Link } from 'react-router-dom';
import { InstructionScreen } from './styles';

import Design from '../images/design.png';

const Instructions = () => {
  return (
    <InstructionScreen>
      <div className="container theme-showcase" role="main">
        <div className="jumbotron">
          <h1>Unibet Front-end test - Live matches</h1>
          <p>
            In this exercise we want you to build a ticker that shows live
            matches based on API data.
          </p>
          <p>
            <Link to="/" className="btn btn-lg btn-success" role="button">
              To the test page »
            </Link>
          </p>
        </div>
        <div className="page-header">
          <h1>Instructions:</h1>
        </div>
        <section>
          <h3>Summary</h3>
          <ul>
            <li>
              Take the
              <Link to="/"> provided HTML page ,</Link>
              use
              <strong>React</strong>
              and get the JSON data from the provided API.
            </li>
            <li>
              Use the data to create a `ticker` element that shows matches that
              are currently being played.
            </li>
            <li>
              It should show one match at a time and use a carousel type sliding
              animation to switch between them.
            </li>
            <li>
              The end result should be as close to the provided design as
              possible.
            </li>
            <li>
              The page should work in the latest versions of
              <strong> Chrome and Firefox.</strong>
            </li>
            <li>
              This is your opportunity to showcase your skills, so make use of
              any libraries, build tools or plug-ins you need to fulfill the
              requirements. But please make sure to use React.
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Design</h3>
          <ul>
            <li>
              Make sure the that result is as close to this attached design as
              possible in all listed browser.
            </li>
            <li>
              The actual content of the feed will vary, so please use the
              specific match shown in the design only as an example.
            </li>
          </ul>
          <p>
            <img src={Design} alt="Design" />
          </p>
          <hr />
          <section>
            <h3>Detailed requirements</h3>
            <ul>
              <li>Only one match should be shown at a time.</li>
              <li>
                Every match should be shown for
                <strong>3 seconds.</strong>
              </li>
              <li>
                After this it should switch to a new match using a `carousel`
                style animation where the current match slides out left and the
                new match slides in.
              </li>
              <li>
                The duration of the slide animation should be
                <strong>500 ms</strong>
              </li>
              <li>
                Each match should show:
                <ul>
                  <li>The current score (home team - away team)</li>
                  <li>The teams playing (home team - away team)</li>
                  <li>
                    An icon representing the sport, if the sport is
                    <strong> Football, Tennis or Basketball.</strong>
                    For any other sport a default icon should be shown.
                  </li>
                  <li>
                    The date and time when match starts/started. If the match is
                    playing today it should say
                    <strong>`Today`,</strong>
                    otherwise it should show the date in
                    <code>YYYY-MM-DD</code>
                    format.
                  </li>
                  <li>
                    A button style link that opens the match in the Unibet
                    Betting Client. The format of the link should be
                    <code>https://www.unibet.com/betting#/event/live/1234</code>
                    , where `1234` is replaced with the correct Event ID for the
                    match.
                  </li>
                </ul>
              </li>
              <li>
                The data fetched from the API should be
                <strong>cached for 2 minutes.</strong>
                Meaning that no additional API calls should be made during this
                time, even when the page is reloaded.
              </li>
            </ul>
          </section>
        </section>
        <hr />
        <section>
          <h3>API</h3>
          <ul>
            <li>
              The API URL to use is:
              <code>
                http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a
              </code>
              .
            </li>
            <li>
              The API supports
              <strong>JSON-P</strong>
              with an appended callback parameter, for example:
              <code>?callback=myFunction.</code>
            </li>
            <li>
              The API returns live data, so you may get different results during
              different times.
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Technical details</h3>
          <ul>
            <li>
              The solution should be built using front-end technologies only (
              <strong>JavaScript, HTML, CSS</strong>
              ).
            </li>
            <li>
              This is your opportunity to showcase your skills, so make use of
              any libraries, build tools or plug-ins you need to fulfill the
              requirements. But please make sure to use React.
            </li>
            <li>
              You may make any adjustments you see fit to the provided HTML/CSS
              code.
            </li>
            <li>The icons needed are provided in the image folder.</li>
            <li>
              Your finished project should be delivered as a complete zip file
              using the same structure as provided here.
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Rating</h3>
          <ul>
            <li>
              You may choose to solve the exercise in whatever way you want, but
              these are a few of the key things we will look at:
              <ul>
                <li>That all listed requirements are fulfilled.</li>
                <li>That the solution works well in all listed browsers.</li>
                <li>
                  How elegant the solution is in terms of code structure,
                  consistency and readability.
                </li>
                <li>
                  What patterns are used and if the solution is object oriented.
                </li>
                <li>What performance considerations have been taken.</li>
                <li>Error handling, debugging, testing and logging.</li>
              </ul>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h3>Final words</h3>
          <p>Thats it! Happy coding! :-)</p>
        </section>
      </div>
    </InstructionScreen>
  );
};
export default Instructions;
