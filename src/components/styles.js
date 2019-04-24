import styled from 'styled-components';

import basketball from '../images/icons/basketball.png';
import football from '../images/icons/football.png';
import tennis from '../images/icons/tennis.png';
import unibet from '../images/icons/unibet.png';

export const Wrapper = styled.article`
  width: 650px;
  height: 300px;
`;

export const LiveEventWrapper = styled.article`
  background: #222;
  margin: auto;
  width: 100%;
  height: auto;
  display: block;
  text-align: center;
  padding: 20px 0;
`;

export const LiveScore = styled.div`
  font-size: 20px;
  color: #eccb1e;
  margin-bottom: 20px;
`;

export const LiveTeams = styled.div`
  margin-bottom: 10px;
`;

export const EventDate = styled.div`
  margin-bottom: 20px;
  color: grey;
`;

export const Button = styled.a`
  font-weight: bold;
  width: 125px;
  height: 14px;
  background: #2e7423;
  padding: 8px 16px;
  text-align: center;
  color: white;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  text-decoration-line: none;
  text-decoration: none;
`;

export const TeamName = styled.div`
  display: inline-block;
  color: #fff;
  font-size: 16px;
`;

// here we are returning the icon on the basis of prop, i have changed the default to unibet because of the reserve keyword
export const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  margin-right: 5px;
  top: 2px;
  background-repeat: no-repeat;
  background: url(${props => {
    // return icon type on the basis of props
    let icon;
    switch (props.type) {
      case 'basketball':
        icon = basketball;
        break;
      case 'football':
        icon = football;
        break;
      case 'tennis':
        icon = tennis;
        break;
      default:
        icon = unibet;
    }
    return icon;
  }});
`;

// Error Style in case if api return noting
export const Error = styled.div`
  display: flex;
  color: #333;
  font-size: 16px;
  justify-content: center;
  height: 250px;
  align-items: center;
`;
