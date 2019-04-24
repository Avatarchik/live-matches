// @flow

import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { API_CACHE_TIME, API_URL_WITH_CALLBACK } from '../../constants';
import LiveMatches from '../LiveMatches';

import Loader from '../Loader';
import { Error } from '../styles';

type OwnState = {
  isLoading: boolean,
  error: string | null,
  liveMatches: Array<any>
};

class Content extends Component<{}, OwnState> {
  state = {
    isLoading: true,
    error: null,
    liveMatches: []
  };

  async componentDidMount() {
    await this.getLiveMatches();
  }

  getLiveMatches = () => {
    const currentTime = new Date().getTime();
    const lastFetchedTime = localStorage.getItem('fetchedTime');
    const data = localStorage.getItem('data') || '{}';
    if (
      !lastFetchedTime ||
      parseInt(lastFetchedTime, 10) + API_CACHE_TIME < currentTime
    ) {
      // using fetchJsonp for geeting result from api
      fetchJsonp(API_URL_WITH_CALLBACK, {
        jsonpCallbackFunction: 'callback'
      })
        .then(response => response.json())
        .then(json => {
          this.setState({ liveMatches: json, isLoading: false });
          localStorage.setItem('data', JSON.stringify(json));
          localStorage.setItem('fetchedTime', currentTime);
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    } else {
      this.setState({ liveMatches: JSON.parse(data), isLoading: false });
    }
  };

  render() {
    const { liveMatches, isLoading, error } = this.state;
    // show loader in case of loading
    if (isLoading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        {!error ? (
          // $FlowFixMe
          <LiveMatches liveMatches={liveMatches} />
        ) : (
          <Error>Some Error Occurred :(</Error>
        )}
      </React.Fragment>
    );
  }
}

export default Content;
