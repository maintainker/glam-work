import React from 'react';
import styled from 'styled-components';
import TabBottom from './TabBottom';
import TabHeader from './TabHeader';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <TabHeader />
      <TabBottom />
    </>
  );
};

export default DefaultLayout;
