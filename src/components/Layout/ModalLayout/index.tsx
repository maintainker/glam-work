import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';

interface Props {
  beforeAddon?: ReactElement;
  afterAddon?: ReactElement;
  title: string;
}

const ModalLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <ModalHeader {...props} />
      <StyledBody>{children}</StyledBody>
    </>
  );
};

export default ModalLayout;

const StyledBody = styled.div`
  top: 50px;
  left: 0;
  right: 0;
  position: absolute;
  overflow: scroll;
  height: calc(100% - 50px);
`;
