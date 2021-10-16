import React from 'react';
import styled from 'styled-components';
import SmallCard from './SmallCard';

interface Props {
  users: User[];
}

const SmallCards: React.FC<Props> = ({ users }) => {
  console.log(users);
  return (
    <StyledContainer>
      {users.map((user, idx) => (
        <SmallCard key={idx} user={user}></SmallCard>
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
