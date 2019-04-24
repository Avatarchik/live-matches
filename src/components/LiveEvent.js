// @flow

import React from 'react';

import {
  SPORTS_ICONS,
  TARGET_URL,
  PLACE_BET_TEXT,
  SCORE_NOT_AVAILABLE
} from '../constants';
import formatEventDate from '../utils';

import {
  LiveEventWrapper,
  LiveScore,
  LiveTeams,
  EventDate,
  Button,
  TeamName,
  Icon
} from './styles';

// Static type checking for Score
export type Score = {
  away: string,
  home: string,
  info: string,
  who: string
};

// Static type checking for Live events
export type LiveEvents = {
  sport: string,
  id: number,
  start: string,
  name: string
};

// Static type checking for Live Score
type LiveScores = {
  score: Score
};

// Props type for LiveEvent component
type Props = {
  liveEvent: LiveEvents,
  liveScore: LiveScores
};

const LiveEvent = (props: Props) => {
  const { liveEvent, liveScore } = props;
  const isScoreAvailable = liveScore.score;

  const icon = SPORTS_ICONS.includes(liveEvent.sport)
    ? liveEvent.sport
    : 'unibet';

  return (
    <LiveEventWrapper key={liveEvent.id}>
      <LiveScore>
        {isScoreAvailable
          ? `${liveScore.score.away} - ${liveScore.score.home}`
          : SCORE_NOT_AVAILABLE}
      </LiveScore>
      <LiveTeams>
        <Icon type={icon.toLowerCase()}>&nbsp;</Icon>
        <TeamName>{liveEvent.name}</TeamName>
      </LiveTeams>
      <EventDate>{formatEventDate(liveEvent.start)}</EventDate>
      <React.Fragment>
        <Button href={`${TARGET_URL}${liveEvent.id}`} target="_blank">
          {PLACE_BET_TEXT}
        </Button>
      </React.Fragment>
    </LiveEventWrapper>
  );
};

export default LiveEvent;
