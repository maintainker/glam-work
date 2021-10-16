import React from 'react';
import styled from 'styled-components';

const data = {
  total: 24,
  topList: [{ title: '글램추천' }, { title: '최상위 매력' }, { title: '볼륨감 있는 체형' }, { title: '즉흥적인 만남 선호' }, { title: '애교 넘치는' }, { title: '슬림한 체형' }, { title: '자취하는' }],
};
const Icons = [
  <svg key={0} stroke="currentColor" fill="#6800bd" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4v-12a64 64 0 00-64-64zm61 112H35a3 3 0 00-3 3v237a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3zM224 307.43A28.57 28.57 0 01195.43 336h-70.86A28.57 28.57 0 0196 307.43v-70.86A28.57 28.57 0 01124.57 208h70.86A28.57 28.57 0 01224 236.57z"></path>
  </svg>,
  <svg key={1} stroke="currentColor" fill="#1fb4ff" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"></path>
    </g>
  </svg>,
  <svg key={2} stroke="currentColor" fill="#ff5100" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
    <path d="M11.234 8l0.766-0.555-2.083-3.221c-0.092-0.14-0.249-0.225-0.417-0.225h-4c-0.168 0-0.325 0.084-0.417 0.225l-2.083 3.221 0.766 0.555 1.729-2.244 0.601 1.402-2.095 3.841h1.917l0.333 5h1v-5h0.5v5h1l0.333-5h1.917l-2.095-3.842 0.601-1.402 1.729 2.244z"></path>
  </svg>,
  <svg key={3} stroke="currentColor" fill="#6800bd" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
  </svg>,
  <svg key={4} stroke="currentColor" fill="#ff5100" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375c0 1.127.159 2.784 1.75 4.375l7 5.25s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375"></path>
  </svg>,
  <svg key={5} stroke="currentColor" fill="#ff59de" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="56" r="56"></circle>
    <path d="M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z"></path>
  </svg>,
  <svg key={6} stroke="currentColor" fill="#ffbe0d" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"></path>
    </g>
  </svg>,
];
const RecommandCard: React.FC = () => {
  return (
    <StyledContainer>
      <h3>맞춤추천</h3>
      <ul>
        {data.topList.map((list, idx) => {
          return (
            <StyledList key={idx}>
              <div>
                {Icons[idx]}
                {list.title}
              </div>
              <StyledButton>선택</StyledButton>
            </StyledList>
          );
        })}
      </ul>
      <StyledMore>{data.total}개 항목 모두 보기</StyledMore>
    </StyledContainer>
  );
};

export default RecommandCard;
const StyledContainer = styled.div`
  width: calc(100% - 6px);
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #eee;
  h3 {
    margin: 0;
  }
`;
const StyledList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  div {
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }
  svg {
    margin: 0 12px;
    width: 22px;
    height: auto;
  }
`;
const StyledButton = styled.button`
  background-color: rgb(66, 165, 245);
  color: #fff;
  font-size: 0.8em;
  border: 0;
  border-radius: 3px;
  height: 24px;
  padding: 4px 16px;
`;
const StyledMore = styled.button`
  width: calc(100% - 24px);
  display: block;
  margin-top: 24px;
  height: 38px;
  background-color: #dcdcdc;
  border: 0;
  border-radius: 3px;
  color: #000;
  font-size: 0.8em;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
`;
