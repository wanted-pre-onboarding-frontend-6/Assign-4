import SideHeadeLogo from 'assets/img/githubIcon.png';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const SidebarHeader = () => {
  return (
    <SideHeaderWrapper>
      <img src={SideHeadeLogo} />
      Git Issue.net
    </SideHeaderWrapper>
  );
};
export default SidebarHeader;

const SideHeaderWrapper = styled.div`
  ${flexCenter}
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  justify-content: start;
  align-items: flex-end;
  margin: 8px 0 0 16px;

  & > img {
    margin-right: 16px;
  }
`;
