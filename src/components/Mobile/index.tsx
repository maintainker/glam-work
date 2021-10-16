import React from 'react';
import styled from 'styled-components';

const MobileFrame: React.FC = ({ children }) => {
  return (
    <StyledBackground>
      <StyledMobildBody>{children}</StyledMobildBody>
    </StyledBackground>
  );
};

export default MobileFrame;

const StyledMobildBody = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 385px;
  height: 660px;
  background-color: #fff;
  overflow-y: scroll;
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ddd;
  position: relative;
`;
