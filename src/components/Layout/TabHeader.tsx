import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TabHeader: React.FC = () => {
  return (
    <StyledTabs>
      <StyledItem className="active">
        <Link to="/home">glam</Link>
      </StyledItem>
      <StyledItem>
        <Link to="/home">라이브</Link>
      </StyledItem>
      <StyledItem>
        <Link to="/home">근처</Link>
      </StyledItem>
    </StyledTabs>
  );
};

export default TabHeader;

const StyledTabs = styled.ul`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(p) => p.theme.COLORS.TEST_DISABLED};
`;
const StyledItem = styled.li`
  padding: 2px;
  height: 50px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 4px;
    color: #dcdcdc;
  }
  &.active {
    a {
      font-weight: bold;
      color: ${(p) => p.theme.COLORS.TEXT_BASIC};
      border-bottom: 1px solid #000;
    }
  }
`;
