import React from 'react';
import styled from 'styled-components';

interface Props {
  users: User[];
}

const SmallCards: React.FC<Props> = ({ users }) => {
  console.log(users);
  return (
    <StyledContainer>
      {users.map((el, idx) => (
        <StyledCard key={idx}></StyledCard>
      ))}
    </StyledContainer>
  );
};
export default SmallCards;
const StyledContainer = styled.div`
  width: calc(100% - 6px);
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledCard = styled.div`
  width: calc((100% - 6px) / 2);
  height: calc((100% - 6px) / 2);
  margin-bottom: 6px;
  background: red;
  border-radius: 8px;
`;
