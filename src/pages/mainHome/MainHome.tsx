import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import theme from 'styles/theme';

const MainHomePage = () => {
  return <MainHomeWrapper>Welcome To Git Issue.net</MainHomeWrapper>;
};
export default MainHomePage;

const MainHomeWrapper = styled.div`
  height: calc(100vh - 64px);
  font-size: ${({ theme }) => theme.fontSize.xxxLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${flexCenter}
`;
