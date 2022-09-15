import styled from 'styled-components';

const MainLayoutHeader = () => {
  return (
    <LayoutHeaderWrapper>
      Repository
      <HeaderTitleSpan>
        angular
        <span>/</span>
        <span>angular-cli</span>
      </HeaderTitleSpan>
    </LayoutHeaderWrapper>
  );
};
export default MainLayoutHeader;

const LayoutHeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.xxxLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-left: 32px;
`;

const HeaderTitleSpan = styled.div`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.palette.fontColor};

  & > span:first-child {
    color: #000;
    margin: 0 8px;
  }

  & > span:last-child {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
