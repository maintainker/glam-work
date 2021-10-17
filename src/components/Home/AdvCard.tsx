import React from 'react';
import styled from 'styled-components';

interface Props {
  adv: Advertise;
}

const AdvCard: React.FC<Props> = ({ adv }) => {
  const handleClick = () => {
    window.open(adv.url);
  };
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <img src={adv.imgUrl} alt="광고 이미지" />
      </StyledImageWrapper>
      <StyledInfo>
        <h3>{adv.title}</h3>
        {adv.description && <p>{adv.description}</p>}
        <StyledButton onClick={handleClick}>바로가기</StyledButton>
      </StyledInfo>
    </StyledContainer>
  );
};

export default AdvCard;

const StyledContainer = styled.div`
  width: calc(100% - 6px);
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #eee;
`;
const StyledImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  img {
    height: 400px;
    width: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const StyledInfo = styled.div`
  height: 150px;
  width: 100%;
  padding: 12px;
  h3 {
    margin: 6px 0 12px;
  }
  p {
    font-size: 0.8em;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  display: block;
  margin-top: 8px;
  height: 32px;
  background-color: rgb(66, 165, 245);
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
`;
