import React from 'react';
import styled, { keyframes } from 'styled-components';

// animation rule for dots
const BounceAnimation = keyframes`
  0% { transform:scale(1);
    background-color:#2f8e2c; }
  50% { transform:scale(.8);
    background-color:#2e7423; }
  100% { transform:scale(.4);
    background-color:#2e7423; }
`;

// wrapper for loader
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

// dots in loader
const Dot = styled.div`
  background-color: #2e7423;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.9s linear infinite;
  animation-delay: ${props => props.delay};
`;

const Loader = () => {
  return (
    <Wrapper>
      <Dot delay="0s" />
      <Dot delay=".2s" />
      <Dot delay=".4s" />
      <Dot delay=".6s" />
    </Wrapper>
  );
};
export default Loader;
