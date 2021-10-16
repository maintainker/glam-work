import React from 'react';
import styled from 'styled-components';

interface Props {
  user: User;
}

const SmallCard: React.FC<Props> = ({ user }) => {
  return (
    <StyledCard imgUrl={user.imgUrl[0]}>
      <StyledBottom>
        <h3>
          {user.nickname}, {user.age}
        </h3>
        <p>{user.description}</p>
        <span>{user.address}</span>
        <StyledButton>보기</StyledButton>
      </StyledBottom>
    </StyledCard>
  );
};

export default SmallCard;

const StyledCard = styled.div<{ imgUrl: string }>`
  width: calc((100% - 6px) / 2);
  height: calc((100% - 6px) / 2);
  margin-bottom: 6px;
  background-image: url(${(p) => p.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;
const StyledBottom = styled.div`
  width: 100%;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  position: absolute;
  bottom: 0;
  left: 0;
  h3 {
    color: #fff;
    font-size: 1em;
    margin: 0;
  }
  p {
    color: #fff;
    font-size: 0.8em;
    font-weight: 500;
    margin: 0;
    margin-top: 6px;
  }
  span {
    color: #aaa;
    font-weight: 400;
    font-size: 0.8em;
  }
`;
const StyledButton = styled.button`
  width: 100%;
  display: block;
  margin-top: 8px;
  height: 24px;
  background-color: rgb(66, 165, 245);
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
`;
