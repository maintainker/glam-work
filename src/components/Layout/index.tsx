import React from 'react';
import styled from 'styled-components';
import TabBottom from './TabBottom';
import TabHeader from './TabHeader';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <TabHeader />
      <StyledBody>{children}</StyledBody>
      <TabBottom />
    </>
  );
};

export default DefaultLayout;

const StyledBody = styled.div`
  top: 50px;
  bottom: 70px;
  left: 0;
  right: 0;
  position: absolute;
  overflow: scroll;
`;
