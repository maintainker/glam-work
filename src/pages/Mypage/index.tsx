import { ModalLayout } from 'components/Layout';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const userData: UserProfile = {
  imgUrl: [
    'https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg',
    'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg',
    'https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg',
    'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg',
  ],
  nickname: 'ssul',
  gender: '남성',
  birth: '1988-05-06',
  address: '서울특별시 광진구',
  description: '고양이 보유',
  options: ['재미있다'],
  height: '175cm',
  body: '통통',
  company: '아이지넷',
  job: 'Front-end Developer',
  education: '대학교',
  school: '서울시립대학교',
  personality: ['쾌활'],
  religion: '기독교',
  drink: '가끔',
  smoke: '안함',
  blood: 'B형',
  nation: '한국',
  charming: ['허세없어요', '재미있어요'],
  interest: ['영화보기', '자기개발', '고양이'],
  lifeStyle: ['집돌이', '평일에 일해요'],
};

const MyPage: React.FC = () => {
  const tmpImg = [0, 1, 2, 3, 4, 5];
  const [isModifyImg, setIsModifyImg] = useState(false);
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const handleCancel = () => {
    setIsModifyImg(false);
  };
  const BeforeArrow = () => (
    <svg onClick={handleGoBack} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  );
  const CancelCross = () => (
    <svg onClick={handleCancel} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
    </svg>
  );
  return (
    <ModalLayout title="프로필 확인" beforeAddon={isModifyImg ? <CancelCross /> : <BeforeArrow />}>
      <StyledSection>
        <StyledImages>
          {tmpImg.map((el) => {
            const imgUrl = el >= userData.imgUrl.length ? 'https://www.ssrl-uark.com/wp-content/uploads/2014/06/no-profile-image-300x300.png' : userData.imgUrl[el];
            return (
              <StyledImageBox style={{ marginBottom: el < 3 ? '4px' : '0' }} key={el}>
                <img src={imgUrl} alt="프로필사진" />
              </StyledImageBox>
            );
          })}
        </StyledImages>
      </StyledSection>
      <StyledSection>
        <StyledMore>
          다양한 매력을 보여줄수 있는 사진을 올려주세요 <Link to="mypage">더 알아보기</Link>
        </StyledMore>
      </StyledSection>
      <StyledSection>
        <StyledUl>
          {[
            { title: '닉네임', prop: 'nickname' },
            { title: '성별', prop: 'gender' },
            { title: '생일', prop: 'birth' },
            { title: '위치', prop: 'address' },
          ].map((el, idx) => {
            const prop = el.prop as keyof UserProfile;
            return (
              <StyledList key={idx}>
                <div className="title">{el.title}</div>
                <div>{userData[prop]}</div>
              </StyledList>
            );
          })}
        </StyledUl>
      </StyledSection>
      <StyledSection>
        <StyledUl>
          {[
            { title: '키', prop: 'height' },
            { title: '체형', prop: 'body' },
          ].map((el, idx) => {
            const prop = el.prop as keyof UserProfile;
            return (
              <StyledList key={idx}>
                <div className="title">{el.title}</div>
                <div>{userData[prop]}</div>
              </StyledList>
            );
          })}
        </StyledUl>
      </StyledSection>
      <StyledSection>
        <StyledUl>
          {[
            { title: '직장', prop: 'company' },
            { title: '직업', prop: 'job' },
            { title: '학력', prop: 'education' },
            { title: '학교', prop: 'school' },
          ].map((el, idx) => {
            const prop = el.prop as 'company' | 'job' | 'education' | 'school';
            return (
              <StyledList key={idx}>
                <div className="title">{el.title}</div>
                <div>{userData[prop]}</div>
              </StyledList>
            );
          })}
        </StyledUl>
      </StyledSection>
      <StyledSection>
        <StyledUl>
          {[
            { title: '직장', prop: 'personality' },
            { title: '종교', prop: 'religion' },
            { title: '음주', prop: 'drink' },
            { title: '흡연', prop: 'smoke' },
            { title: '혈액형', prop: 'blood' },
            { title: '인종', prop: 'nation' },
          ].map((el, idx) => {
            const prop = el.prop as 'personality' | 'religion' | 'drink' | 'smoke' | 'blood' | 'nation';
            let data = '';
            console.log(userData[prop]);
            if (prop === 'personality') {
              data = userData[prop].join(', ');
              console.log(data);
            } else data = userData[prop];
            return (
              <StyledList key={idx}>
                <div className="title">{el.title}</div>
                <div>{data}</div>
              </StyledList>
            );
          })}
        </StyledUl>
      </StyledSection>
      <StyledSection>
        <StyledItems>
          <h5>매력 포인트</h5>
          <ul>
            {userData.charming.map((el, idx) => (
              <StyledItem key={idx}>{el}</StyledItem>
            ))}
          </ul>
        </StyledItems>
      </StyledSection>
      <StyledSection>
        <StyledItems>
          <h5>관심사</h5>
          <ul>
            {userData.interest.map((el, idx) => (
              <StyledItem key={idx}>{el}</StyledItem>
            ))}
          </ul>
        </StyledItems>
      </StyledSection>
      <StyledSection>
        <StyledItems>
          <h5>라이프 스타일</h5>
          <ul>
            {userData.lifeStyle.map((el, idx) => (
              <StyledItem key={idx}>{el}</StyledItem>
            ))}
          </ul>
        </StyledItems>
      </StyledSection>
    </ModalLayout>
  );
};

export default MyPage;
const StyledSection = styled.section`
  border-bottom: 1px solid #dcdcdc;
`;
const StyledImages = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledImageBox = styled.li`
  width: 126px;
  height: 126px;
  overflow: hidden;
  position: relative;
  img {
    height: 120%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const StyledMore = styled.p`
  margin: 0;
  padding: 8px 0;
  text-align: center;
  font-size: 12px;
  a {
    font-weight: bold;
  }
`;
const StyledUl = styled.ul`
  padding: 0 12px;
  width: 100%;
`;
const StyledList = styled.li`
  display: flex;
  padding: 12px 0;
  font-size: 0.8em;
  .title {
    width: 100px;
    font-weight: bold;
  }
`;
const StyledItems = styled.div`
  padding: 12px;
  h5 {
    font-weight: bold;
    margin: 0 0 8px 4px;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
const StyledItem = styled.li`
  font-size: 0.7em;
  color: rgb(66, 165, 245);
  border: 2px solid rgb(66, 165, 245);
  border-radius: 5px;
  padding: 5px;
  margin: 0px 4px 4px 0;
`;
