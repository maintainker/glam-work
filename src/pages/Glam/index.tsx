import AdvCard from 'components/Home/AdvCard';
import RecommandCard from 'components/Home/RecommandCard';
import SmallCards from 'components/Home/SmallCards';
import UserCard from 'components/Home/UserCard';
import { DefaultLayout } from 'components/Layout';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Data {
  type: 'user' | 'recommand' | 'adv' | 'more';
  data: User | User[] | Advertise | null;
}

const data: Data[] = [
  {
    type: 'user',
    data: {
      imgUrl: [
        'https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg',
        'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg',
        'https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg',
        'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg',
      ],
      nickname: '챠챠챠',
      age: 38,
      description: '흡연자싫어',
      address: '서울특별시',
      options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
      job: '간호사',
    },
  },
  {
    type: 'more',
    data: [
      {
        imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
        nickname: '옹야',
        age: 27,
        description: '여행에 관심',
        address: '서울특별시',
        options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
        job: '백수',
      },
      {
        imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
        nickname: '악어',
        age: 30,
        description: '술에 관심',
        address: '서울특별시',
        options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
        job: '의사',
      },
      {
        imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
        nickname: '옹야',
        age: 27,
        description: '여행에 관심',
        address: '서울특별시',
        options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
        job: '선생님',
      },
      {
        imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
        nickname: '악어',
        age: 30,
        description: '술에 관심',
        address: '서울특별시',
        options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
        job: '휴식중',
      },
    ],
  },
  {
    type: 'recommand',
    data: null,
  },
  {
    type: 'adv',
    data: {
      url: 'https://www.glam.am/',
      imgUrl: 'https://image.shutterstock.com/image-photo/airplane-sky-sunrise-sunset-260nw-1931146130.jpg',
      title: '빠르게 관심을 받아보세요',
      description: '평소보다 2배 이상 회원님의 프로필을 등장시켜 매력적인 상대를 많이 만날 수 있습니다.',
    },
  },
  {
    type: 'user',
    data: {
      imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
      nickname: '악어',
      age: 30,
      description: '술에 관심',
      address: '서울특별시',
      options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
      job: '학생',
    },
  },
  {
    type: 'user',
    data: {
      imgUrl: ['https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg', 'https://image.shutterstock.com/image-photo/happy-cheerful-young-woman-wearing-260nw-613759379.jpg'],
      nickname: '옹야',
      age: 27,
      description: '여행에 관심',
      address: '서울특별시',
      options: ['웃음이 많아요', '혼자 잘 놀아요', '예의가 발라요'],
      job: '프리렌서',
    },
  },
];

const GlamPage: React.FC = () => {
  const BodyComponent: ReactElement[] = data.map((el) => {
    switch (el.type) {
      case 'user': {
        const user = el.data as User;
        return <UserCard user={user} />;
      }
      case 'more': {
        const users = el.data as User[];
        return <SmallCards users={users} />;
      }
      case 'recommand': {
        return <RecommandCard />;
      }
      case 'adv': {
        const adv = el.data as Advertise;
        return <AdvCard adv={adv} />;
      }
      default:
        return <></>;
    }
  });
  return (
    <DefaultLayout>
      <StyledCardList>{BodyComponent}</StyledCardList>
    </DefaultLayout>
  );
};
export default GlamPage;

const StyledCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
