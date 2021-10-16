import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const handleIdx = (idx: number) => {
    if (imageIdx < idx) {
      setImageIdx((prev) => prev + 1);
    }
    if (imageIdx > idx) {
      setImageIdx((prev) => prev - 1);
    }
  };
  const handleTouch = (e: MouseEvent<HTMLDivElement>) => {
    if (e.screenX / window.innerWidth > 0.5 && imageIdx !== user.imgUrl.length - 1) {
      setImageIdx((prev) => prev + 1);
    }
    if (e.screenX / window.innerWidth < 0.5 && imageIdx !== 0) {
      setImageIdx((prev) => prev - 1);
    }
  };
  return (
    <StyledContainer>
      <StyledUlBtn imgCount={user.imgUrl.length}>
        {user.imgUrl.map((_, idx: number) => {
          return <li key={idx} className={idx === imageIdx ? 'active' : ''} onClick={() => handleIdx(idx)}></li>;
        })}
      </StyledUlBtn>
      <StyledImageCard imgUrl={user.imgUrl[imageIdx]} onClick={handleTouch} />
      <StyledInfo>
        <h3>
          {user.nickname}, {user.age}
        </h3>
        {imageIdx === 0 && <StyledDescript>{user.description}</StyledDescript>}
        {imageIdx === 1 && (
          <>
            <StyledDescript>
              {user.job} · {user.address}
            </StyledDescript>
            <StyledSub>{163}cm</StyledSub>
          </>
        )}
        {imageIdx > 1 && (
          <StyledOptionUl>
            {user.options.map((el, idx) => (
              <StyledOption key={idx}>{el}</StyledOption>
            ))}
          </StyledOptionUl>
        )}
        <StyledButtons>
          <StyledButton btnType="cancel">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          </StyledButton>
          <StyledButton btnType="like">좋아요</StyledButton>
          <StyledButton btnType="super">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
            </svg>
          </StyledButton>
        </StyledButtons>
      </StyledInfo>
    </StyledContainer>
  );
};

export default UserCard;
const StyledContainer = styled.div`
  width: calc(100% - 6px);
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 12px 0;
`;
const StyledImageCard = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.imgUrl});
  background-size: cover;
  background-position: center center;
`;

const StyledUlBtn = styled.ul<{ imgCount: number }>`
  width: 120px;
  height: 3px;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

  li {
    width: calc((100% - (2px) * ${(p) => p.imgCount - 1}) / ${(p) => p.imgCount});
    height: 3px;
    border-radius: 1.5px;
    background: #ccc;
    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
`;

const StyledInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  border-radius: 0 0 8px 8px;
  h3 {
    color: #fff;
    margin: 0;
    margin-bottom: 12px;
  }
`;
const StyledDescript = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
`;

const StyledSub = styled.span`
  color: ${(p) => p.theme.COLORS.TEST_DISABLED};
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  width: 100%;
`;

const StyledButton = styled.button<{ btnType: 'cancel' | 'like' | 'super' }>`
  border: none;
  border-radius: 3px;
  height: 36px;
  width: ${(p) => (p.btnType === 'like' ? 'calc(100% - 88px)' : '40px')};
  background: ${(p) => (p.btnType === 'cancel' ? 'rgba(0,0,0,0.3)' : 'rgb(66,165,245)')};
  margin-bottom: 12px;
  color: #fff;
  font-weight: 500;
  svg {
    width: 16px;
    height: auto;
    fill: #fff;
  }
`;

const StyledOptionUl = styled.ul`
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledOption = styled.li`
  background: rgba(0, 0, 0, 0.5);
  padding: 0 12px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 6px;
`;
