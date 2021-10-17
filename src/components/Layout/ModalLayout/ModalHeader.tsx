import React, { ReactElement } from 'react';
import styled from 'styled-components';
interface Props {
  beforeAddon?: ReactElement;
  afterAddon?: ReactElement;
  title: string;
}
const ModalHeader: React.FC<Props> = ({ beforeAddon, afterAddon, title }) => {
  return (
    <StyledTabs>
      {beforeAddon && <StyledAddon addon={'before'}>{beforeAddon}</StyledAddon>}
      <span>{title}</span>
      {afterAddon && <StyledAddon addon={'after'}>{beforeAddon}</StyledAddon>}
    </StyledTabs>
  );
};

export default ModalHeader;

const StyledTabs = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.COLORS.TEST_DISABLED};
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
`;
const StyledAddon = styled.div<{ addon: 'before' | 'after' }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.addon === 'before' ? 'left: 12px;' : 'right:12px;')}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: 24px;
  svg {
    height: 100%;
    width: auto;
  }
`;
