// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import LiveEvent from './LiveEvent';
import { SLIDER_SETTINGS } from '../constants';
import type { Score, LiveEvents } from './LiveEvent';

// Static type checking for Live Score
type LiveData = {
  score: Score
};

// Static type checking for Matches
type Match = {
  event: LiveEvents,
  liveData: LiveData
};

// Props type for LiveMatches component
type Props = {
  liveMatches: {
    length: number,
    liveEvents: []
  }
};

const LiveMatches = (props: Props) => {
  const { liveMatches } = props;
  return (
    <React.Fragment>
      <Slider {...SLIDER_SETTINGS}>
        {liveMatches.length !== 0
          ? liveMatches.liveEvents.map((match: Match) => {
              return (
                <div key={match.event.id}>
                  <LiveEvent
                    liveEvent={match.event}
                    liveScore={match.liveData}
                  />
                </div>
              );
            })
          : null}
      </Slider>
    </React.Fragment>
  );
};

LiveMatches.prototype = {
  liveMatches: PropTypes.shape({
    liveEvents: PropTypes.array
  })
};

export default LiveMatches;
